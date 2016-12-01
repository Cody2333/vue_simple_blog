import $ from 'jquery';
import config from './config';

const urlPrefix = config.urlPrefix;
const id = config.id;
const key = config.key;

function rawHttp(url, type) {
  return {
    url,
    type,
    crossDomain: true,
  };
}

function baseHttp(url, type, noPrefix) {
  const finalUrl = (noPrefix) ? url : urlPrefix + url;
  return {
    url: finalUrl,
    type,
    headers: {
      'X-LC-Id': id,
      'X-LC-Key': key,
    },
    contentType: 'application/json',
    dataType: 'json',
    crossDomain: true,
  };
}

export function autoLogin(url, sessionToken) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'get');
    ajaxBody.headers = {
      'X-LC-Id': id,
      'X-LC-Key': key,
      'X-LC-Session': sessionToken,
    };
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    $.ajax(ajaxBody);
  });
}

export function rawGet(url) {
  return new Promise((resolve, reject) => {
    const ajaxBody = rawHttp(url, 'get');
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    $.ajax(ajaxBody);
  });
}

export function rawPost(url, data) {
  return new Promise((resolve, reject) => {
    const ajaxBody = rawHttp(url, 'post');
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    ajaxBody.data = data;
    $.ajax(ajaxBody);
  });
}

export function get(url, noPrefix) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'get', noPrefix);
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    $.ajax(ajaxBody);
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'post');
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    ajaxBody.data = data;
    $.ajax(ajaxBody);
  });
}

export function put(url, data) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'put');
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    ajaxBody.data = data;
    $.ajax(ajaxBody);
  });
}

export function del(url, data) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'delete');
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    ajaxBody.data = data;
    $.ajax(ajaxBody);
  });
}

export function uploadText(url, data) {
  return new Promise((resolve, reject) => {
    const ajaxBody = baseHttp(url, 'post');
    ajaxBody.contentType = 'text/plain';
    ajaxBody.dataType = 'json';
    ajaxBody.success = resolve;
    ajaxBody.error = reject;
    ajaxBody.data = data;
    $.ajax(ajaxBody);
  });
}
