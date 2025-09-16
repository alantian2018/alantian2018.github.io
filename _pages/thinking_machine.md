---
layout: none
title: "Posture Detection"
permalink: /thinking_machine/
nav: false
nav_order: 3
---


<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Posture Detection</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #111;
      color: white;
    }

    header {
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      color: white;
    }

    #main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      gap: 2rem;
    }

    #video-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    #status-label {
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      min-height: 1.5rem;
      transition: color 0.3s ease;
    }

    #canvas {
      max-width: 65vw;
      max-height: 70vh;
      border-radius: 12px;
      background: black;
      box-shadow: 0 0 25px 6px rgba(0,0,0,0.6);
      flex-shrink: 0;
      transition: box-shadow 0.3s ease;
    }

    /* glow states */
    .glow-good {
      box-shadow: 0 0 40px 12px rgba(40, 167, 69, 0.9);
    }

    .glow-bad {
      box-shadow: 0 0 40px 12px rgba(220, 53, 69, 0.9);
    }

    .bar-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;
      transition: box-shadow 0.3s ease;
    }

    .bar-label {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
      text-align: center;
    }

    .bar-container {
      width: 100%;
      height: 350px; /* fixed height */
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column-reverse;
    }

    .bar {
      width: 100%;
      height: 0%;
      transition: height 0.3s ease;
    }

    .good {
      background: #28a745;
    }

    .bad {
      background: #dc3545;
    }

    .percent {
      margin-top: 0.5rem;
      font-size: 0.9rem;
      color: #ccc;
    }

    #controls {
      padding: 1rem;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      background: #007bff;
      color: white;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <header>📏 Posture Detection</header>

  <div id="main">
    <!-- Left: Good posture -->
    <div id="good-wrapper" class="bar-wrapper">
      <div class="bar-label">Good</div>
      <div class="bar-container"><div id="good-bar" class="bar good"></div></div>
      <div id="good-percent" class="percent">0%</div>
    </div>

    <!-- Video + status -->
    <div id="video-wrapper">
      <div id="status-label">Analyzing...</div>
      <canvas id="canvas"></canvas>
    </div>

    <!-- Right: Bad posture -->
    <div id="bad-wrapper" class="bar-wrapper">
      <div class="bar-label">Bad</div>
      <div class="bar-container"><div id="bad-bar" class="bar bad"></div></div>
      <div id="bad-percent" class="percent">0%</div>
    </div>
  </div>

  <div id="controls">
    <button id="toggle-btn" onclick="toggle()">Start</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"></script>
  <script type="text/javascript">
      const URL = "https://teachablemachine.withgoogle.com/models/VXTs5iAEA/";
      let model, webcam, ctx, maxPredictions;
      let running = false;

      async function init() {
          const modelURL = URL + "model.json";
          const metadataURL = URL + "metadata.json";

          model = await tmPose.load(modelURL, metadataURL);
          maxPredictions = model.getTotalClasses();

          const canvas = document.getElementById("canvas");
          ctx = canvas.getContext("2d");

          canvas.width = 640;
          canvas.height = 480;

          const flip = true;
          webcam = new tmPose.Webcam(canvas.width, canvas.height, flip);
          await webcam.setup();
          await webcam.play();
          running = true;
          window.requestAnimationFrame(loop);
      }

      async function loop(timestamp) {
          if (running) {
              webcam.update();
              await predict();
          }
          window.requestAnimationFrame(loop);
      }

      async function predict() {
          const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
          const prediction = await model.predict(posenetOutput);

          let goodProb = 0;
          let badProb = 0;

          for (let i = 0; i < maxPredictions; i++) {
              if (prediction[i].className.toLowerCase().includes("good")) {
                  goodProb = prediction[i].probability;
              }
              if (prediction[i].className.toLowerCase().includes("bad")) {
                  badProb = prediction[i].probability;
              }
          }

          // Update bars
          document.getElementById("good-bar").style.height = (goodProb * 100) + "%";
          document.getElementById("bad-bar").style.height = (badProb * 100) + "%";
          document.getElementById("good-percent").innerText = Math.round(goodProb * 100) + "%";
          document.getElementById("bad-percent").innerText = Math.round(badProb * 100) + "%";

          // Update status + video glow
          const canvasEl = document.getElementById("canvas");
          const statusLabel = document.getElementById("status-label");
          canvasEl.classList.remove("glow-good", "glow-bad");
          if (goodProb > 0.7) {
              statusLabel.innerText = "✅ Good Posture";
              statusLabel.style.color = "#28a745";
              canvasEl.classList.add("glow-good");
          } else if (badProb > 0.7) {
              statusLabel.innerText = "⚠️ Bad Posture";
              statusLabel.style.color = "#dc3545";
              canvasEl.classList.add("glow-bad");
          } else {
              statusLabel.innerText = "Analyzing...";
              statusLabel.style.color = "#ccc";
          }

          // Draw video + pose overlay
          ctx.drawImage(webcam.canvas, 0, 0, canvas.width, canvas.height);
          if (pose) {
              const minPartConfidence = 0.5;
              tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
              tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
          }
      }

      function toggle() {
          const btn = document.getElementById("toggle-btn");
          if (!model) {
              init();
              btn.innerText = "Pause";
          } else {
              running = !running;
              btn.innerText = running ? "Pause" : "Resume";
          }
      }
  </script>
</body>
</html>
