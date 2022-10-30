"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NavMeshStatsNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMeshStatsNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: NavMeshStatsNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PbNavMeshStatsInfo");
const pb_1 = require("google-protobuf");
class NavMeshStatsNotify extends pb_1.Message {
    constructor(data) {
        super();
        _NavMeshStatsNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _NavMeshStatsNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("infos" in data && data.infos != undefined) {
                this.infos = data.infos;
            }
        }
    }
    get infos() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PbNavMeshStatsInfo, 4);
    }
    set infos(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    static fromObject(data) {
        const message = new NavMeshStatsNotify({});
        if (data.infos != null) {
            message.infos = data.infos.map(item => dependency_1.PbNavMeshStatsInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.infos != null) {
            data.infos = this.infos.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.infos.length)
            writer.writeRepeatedMessage(4, this.infos, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NavMeshStatsNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.infos, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.PbNavMeshStatsInfo.deserialize(reader), dependency_1.PbNavMeshStatsInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return NavMeshStatsNotify.deserialize(bytes);
    }
}
exports.NavMeshStatsNotify = NavMeshStatsNotify;
_NavMeshStatsNotify_one_of_decls = new WeakMap();
