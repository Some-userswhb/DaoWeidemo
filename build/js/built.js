(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(function () {
  $.get('http://localhost:3000/index', function (data) {
    console.log(data);
    console.log('上面是data数据');
    $('.goods-list').append(template('goodsList', {
      data: data
    }));
  }); //当滚动条滚动时大于 头部一半时候  执行动画效果

  var scroll = function scroll(headerclass, distance, colo1) {
    $(window).scroll(function () {
      //获取滚动条滚动的位置
      var top = $(window).scrollTop(); //头部的高度

      var heig = $(headerclass).height(); //当滚动距离大于头部高度的一半 执行动画

      console.log(heig);

      if (top > heig / 2 && top < distance) {
        $(headerclass).css({
          transform: 'translateY(-50px)',
          opacity: colo1
        });
        setTimeout(function () {
          $(headerclass).css({
            transform: 'translateY(0px)',
            opacity: 1
          });
        }, 500);
      }
    });
  };

  scroll('.daowei-header', 200, 0.2); //点击按钮 改变当前li的字体颜色
});
},{}]},{},[1])