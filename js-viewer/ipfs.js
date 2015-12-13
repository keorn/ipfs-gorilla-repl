/*
 * This file is part of gorilla-repl. Copyright (C) 2014-, Jony Hudson.
 *
 * gorilla-repl is licenced to you under the MIT licence. See the file LICENCE.txt for full details.
 */

var getFromIpfs = function (hash, callback) {
    $.get("../" + hash, callback);
};

var getFromIpns = function (hash, callback) {
    $.get("../../ipns/" + hash, callback);
};
