---
layout: page
title: The Life Cycle
description: By Alan Tian, Aakash Kumar, Sooraj Vydyanathan, Amanjyoti Mridha
img: assets/img/lifecycle.png
importance: 2
category: Hackathons
---
<div class="row">
<iframe width="786" height="555" src="https://www.youtube.com/embed/ztoc4f0ujq4" title="The Life Cycle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<br>
<h1>Inspiration</h1>
I'm sure everyone has heard of global warming, climate change, and the need to reduce greenhouse gases in the atmosphere. While traditional methods, such as rallying others through social media or hosting clean-ups are essential, we wanted to apply computing power to be able to better address this issue.
<br>

<h1>What it does</h1>
The user will upload an image to our website. This image is fed through a neural network and different pieces of plastic will be identified.
<br>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/life1.jpg" title="Home" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/life3.jpg" title="Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Home page and an example of the results page.
</div>

<h1>How we built it</h1>
We used Django as a framework. All web pages were written from scratch. The model utilized Google's Inceptionv3 image classification model. The library used was Tensorflow.
<br>
<h1>Challenges we ran into</h1>
The biggest challenge was training a model that worked. We tried many different models, such as resnet18 (75% accuracy), mobile-net (60% accuracy), and even tried writing a custom network. We tried implementing them in both Pytorch and Tensorflow. Unfortunately, all failed to achieve an acceptable accuracy. Even our final model, Inception, only achieved around an 80% accuracy.

Another challenge we faced was connecting our frontend and backend. We had a hard time passing the image from the upload interface to our model input.
<br>
<h1>Accomplishments that we're proud of</h1>
While we knew that training the model would be the most difficult task, we were proud that we were able to write almost all the code for the website within the first day.
<br>
<h1>What we learned</h1>
We learned a lot about web development during this Hackathon. Many of us have had prior experience with machine learning and training models, but this Hackathon was a great way for us to gain experience implementing a website using HTML/CSS.
<br>
<h1>What's next for TheLifeCycle</h1>
Our goal is to create a model capable of achieving multiclass classification, which would be capable of telling the user what type of trash they have uploaded (ie: paper, plastic, cardboard, etc) instead of telling the user if it is only recyclable/organic. In addition, we would like to increase our current model's classification accuracy.
<br>

<h5 style="text-align:center;">    
    <a href="https://devpost.com/software/thelifecycle#updates">Devpost Page</a>&nbsp;&nbsp;
    <a href="https://github.com/TheRealAakash/TheLifeCycle">Github Repo</a>
</h5>