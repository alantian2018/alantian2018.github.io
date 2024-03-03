---
layout: page
title: Credibility
description: By Alan Tian, Aakash Kumar, Sooraj Vydyanathan, Amanjyoti Mridha
img: assets/img/credibility.png
importance: 3
category: Hackathons
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/credibility.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Fake news is ever more powerful when it comes to riling up the populus in hysteria. With this issue in mind, in this project, we sought to produce a program based on machine learning models capable of assessing online articles' credibility. The project aimed to assess whether machine learning models and NLP algorithms could be utilized to produce software in which the user will enter a link to an article, and the program will output the article's credibility score with regards to its sources, text, and how it may compare to other credible articles, providing a relatively intuitive approach to this issue. After developing our model which used multiple different corpora to analyze different aspects of an article and then compares these factors to develop a final score, we found our results to be reasonably well, with a mean final percent error of 9.72% within our acceptable range of 10%. At the same time, our results revealed to us which factors we were using that needed revision or were not meaningfully impacting our final result. As a consensus of our results, we found that our model for assessing website credibility is a viable solution for the problem of misinformation spread throughout the internet. Although our model is not perfect yet, it performs decently well, and with more data, development, and training it can significantly improve in accuracy and feature extraction.

Modern technology has led to misinformation on social media, especially with regard to the coronavirus pandemic, which has become a pertinent issue, and it can be challenging to find credible, informative sources on the platform. A tool must allow individuals to assess the credibility of everyday posts and sources to aid in getting credible information.

This project aims to assess whether Machine Learning models and Natural Language Processing (NLP) algorithms can approximate an article’s credibility score by comparing its sources, text, and information to other credible articles. The objective is for the program to output valid credibility scores for over 75% of articles, utilizing corpuses such as the Web Content Credibility Corpus for testing our program.

We determine the credibility of articles using natural language processing and matching learning evaluation. Specifically, we extract knowledge graphs from unstructured text using Transformers and the "Attention is all you need" framework. Using this, we are able to construct a knowledge graph of known information, as well as a knowledge graph of a specific article, using these knowledge graphs, we are able to compare information to evaluate the credibility of an article.
