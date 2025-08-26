---
layout: post
title: "Why is Computer Science a Science?"
date: 2025-08-25
categories: [essay, computer-science]
tags: [computer-science, theory, computation, turing-machine, philosophy]
description: "An exploration of what makes Computer Science a true science, focusing on the Theory of Computation and the foundational role of the Turing Machine."
featured: true
thumbnail: /assets/img/prof_pic.jpg
---

When you think of Computer Science, what do you think of? 
Programming?
Artificial Intelligence Models?
Heck, transistors and bits?

Those all certainly fall under the purview of Computer Science, and many of these are responsible for the greatest changes in the last 50 years. But beyond the OpenAI's and Nvidia's of today, the Yahoos and Ciscos of a decade ago, even the IBMs of nearly half a century ago — lies something much more pure.

This is the **Theory of Computation**.
On what makes some problems easy and some problems hard.
On the things that we will never know, on the things that we can't possibly know.
In this sandbox, we invent new machines and new worlds.
We get to learn what a computer even is, and push them to their absolute breaking point.
But perhaps most importantly, we learn why Computer Science gets to be called a science.

## What is "Science"?

When most people hear the word science, they might think of physics, chemistry, or biology. They might conjure up images of labs, equations, test tubes, or telescopes—tools of discovery that have helped us uncover so much about the universe. But have you ever stopped to think about: What formally makes these subjects sciences?

A good place to start is the idea of experimentation and iteration. Perhaps you have a hunch about how something might work—even if it's just a guess. Then you test it. You observe, you revise, and eventually, if you're lucky, you arrive at something that not only fits the evidence but also helps explain new things too.

Take planetary motion, for example. Today, even a grade schooler can tell you that planets orbit the Sun. But this wasn't always so obvious. From early skywatchers to modern supercomputers simulating galaxies, generations of scientists translated raw celestial observation into precise mathematical frameworks. Everything we know about the stars today is the culmination of a 30,000 year old project known as Astronomy.

Or consider the atom. In the early 20th century, Niels Bohr had a sense that electrons might behave in discrete energy levels, in part inspired by both experimental data and sprinkle of imagination. But the strength of Bohr's model was in how he shaped it into formal theory—something which could be validated with experiments, forming the foundation of modern chemistry.

From these stories, it may seem like iteration and experimentation are the stars of science, as they help us test and improve our ideas. Yet as powerful as they are, they are merely the tools. Nobody is doing experiments and refining models just for the sake of it. Instead, the true goal is to develop models and frameworks that can predict the unknown with precision. In the long run, it is the idea of a heliocentric universe, or an accurate model of the atom, that gives us power to explore the unknown, and not how these models were developed.

**So what is science?**

Science is the formalization of humanity's intuitions about the world. It is a clarification on the structure of the world using models and frameworks.

## What is a computer, really?

Let's circle back to the main topic: Computer Science. If science is the process of formalizing our intuition to build frameworks that help us understand the world, then Computer Science is about formalizing our intuition of what a computer and computation is — and what it can do. 

So what is a computer?

A good place to start is with the devices we commonly call computers — the laptop, PC, or phone you're using right now. You point and click at the screen, or perhaps type on the keyboard. The computer responds appropriately, and can even remember things if you'd like it to.

For computers to work, a couple basic capabilities are essential: 

- **Input**: The ability to receive and process input — for example, your phone responding when you tap the screen.
- **Memory**: The ability to store and recall information about past actions or states. This memory can take many forms, from small internal states in your program to data on disk.
- **Logic**: The ability to react to different states. For example, if the input is x, do y. Or if no input is given, do these steps. Or if abc is stored in memory, do this.

But your devices are still real, physical things bound by physics. Any formalization of a computer has to be decoupled with the real world. After all, if someone came along tomorrow and made a computer with more memory, you'd still call it a computer. So how do we create a model of every possible computer?

Enter **Alan Turing** and his elegant solution: the **Turing Machine**, which distills computation down to its purest, most essential form.

At first glance, the idea is surprisingly simple. Imagine an infinitely long strip of paper divided into squares — this is the tape. Each square holds a symbol, like a 0 or 1. Hovering over the tape is a mechanical head that can perform three basic actions: read the symbol in the current square, write a new symbol, and move one square to the left or right. Its behavior is controlled by an automaton — a set of rules that determine what the head should do based on its current state and the symbol it reads. At each step, the machine reads a symbol, possibly writes a new one, and moves one square left or right. Eventually, the automaton may tell the machine to halt, effectively stopping all movement and computation.

Here's a concrete example of a Turing Machine that inverts its input. Imagine the tape holds a binary string like 1010 starting at some square, with blank squares elsewhere. The head starts on the leftmost bit.

1. The machine reads the symbol under the head.
2. If it reads 1, it writes 0; if it reads 0, it writes 1.
3. Then it moves the head one square to the right.
4. It repeats this process until it reaches a blank square (□), signaling the end of the input.
5. At that point, the machine halts.

For the input 1010, the machine would produce 0101 on the tape, effectively inverting each bit.

Note that all the core requirements are here. The tape acts as memory. The Lookup Table acts as logic. And we can write input on the tape before running the machine. 

Remarkably, despite the Turing Machine's humble simplicity, no one has ever discovered a well-defined model of computation that can do more. Across decades of research and countless paradigms — from logic circuits to cellular automata to modern programming languages — every serious model has turned out to be computationally equivalent.

In this sense, the Turing Machine captures the full power of computation. Any algorithm you've ever written, any app you've ever used — from binary search to GPS routing to supercomputers modeling the climate — can, in theory, be reduced to a sequence of steps executed by a Turing Machine.

And yet, it doesn't rely on transistors, silicon, or electricity. In principle, you could simulate one using nothing but pencil and sufficient paper. Given enough time and patience, a person alone in a room could compute anything a modern computer can.

By abstracting computation away from any physical implementation, the Turing Machine becomes a universal framework for what can be computed. It is the formal foundation on which all of Computer Science rests, giving it the hallmark of science. It's how we define algorithms, measure complexity, and understand what problems are solvable in the first place.

Without it, Computer Science has no foundation — no rigorous notion of what a computer is nor what it means to compute.

With it, we gain a precise language to explore the full scope of what Computer Science can truly achieve.

## So what?

You will probably never need to think about a Turing Machine in your daily life. Humanity may not find any practical applications of Theory of Computation at all. So why bother studying it?

Consider this: when the first engineers built the first general modern computers such as the ENIAC, the UNIVAC, and the Pilot ACE — they weren't consciously following a blueprint of a Turing Machine. Instead, they were focused on practical tasks such as calculating artillery trajectories, decoding encrypted messages and processing data.

But when computer scientists looked back and analyzed these machines, they realized something amazing: that every single one could be simulated by a Turing machine. Before any physical machine had been realized, Turing had discovered the universal essence of computation itself.

This is why you should study the Theory of Computation. It is a formalization of the model of the computer akin to Bohr's model of the atom or the heliocentric solar system. It is the fundamental heart and soul of Computer Science. 

Because it plays with what can be done efficiently. It explores the limits of what is currently known. It brushes up against what can ever be known. It defines the boundaries of what computer science is. For that is a very powerful thing.

