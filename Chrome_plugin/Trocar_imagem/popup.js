// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


$('#trocarFoto').on('click', function(element){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, {file: "deFora/jquery-3.3.1.min.js"}, function(){
      chrome.tabs.executeScript(
        null,
        {code: "$('img').each(function(){$(this).attr('src', 'https://img.fstatic.com/B3z8a3cbFkiXwSVZpfeUZ3L_6Co=/210x312/smart/https://cdn.fstatic.com/media/artists/avatar/2017/12/nicolas-cage_a1706.jpg')});"});

    });
   
        
  });

});

