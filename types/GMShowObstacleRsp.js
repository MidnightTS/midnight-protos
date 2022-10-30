"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GMShowObstacleRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMShowObstacleRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GMShowObstacleRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ObstacleInfo");
const pb_1 = require("google-protobuf");
class GMShowObstacleRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GMShowObstacleRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _GMShowObstacleRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("obstacles" in data && data.obstacles != undefined) {
                this.obstacles = data.obstacles;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get obstacles() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ObstacleInfo, 6);
    }
    set obstacles(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    static fromObject(data) {
        const message = new GMShowObstacleRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.obstacles != null) {
            message.obstacles = data.obstacles.map(item => dependency_1.ObstacleInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.obstacles != null) {
            data.obstacles = this.obstacles.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (this.obstacles.length)
            writer.writeRepeatedMessage(6, this.obstacles, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GMShowObstacleRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.retcode = reader.readInt32();
                    break;
                case 6:
                    reader.readMessage(message.obstacles, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.ObstacleInfo.deserialize(reader), dependency_1.ObstacleInfo));
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
        return GMShowObstacleRsp.deserialize(bytes);
    }
}
exports.GMShowObstacleRsp = GMShowObstacleRsp;
_GMShowObstacleRsp_one_of_decls = new WeakMap();
