"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GMShowNavMeshRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GMShowNavMeshRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GMShowNavMeshRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PBNavMeshTile");
const pb_1 = require("google-protobuf");
class GMShowNavMeshRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GMShowNavMeshRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], __classPrivateFieldGet(this, _GMShowNavMeshRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("tiles" in data && data.tiles != undefined) {
                this.tiles = data.tiles;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get tiles() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PBNavMeshTile, 11);
    }
    set tiles(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data) {
        const message = new GMShowNavMeshRsp({});
        if (data.tiles != null) {
            message.tiles = data.tiles.map(item => dependency_1.PBNavMeshTile.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.tiles != null) {
            data.tiles = this.tiles.map((item) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.tiles.length)
            writer.writeRepeatedMessage(11, this.tiles, (item) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GMShowNavMeshRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    reader.readMessage(message.tiles, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_1.PBNavMeshTile.deserialize(reader), dependency_1.PBNavMeshTile));
                    break;
                case 5:
                    message.retcode = reader.readInt32();
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
        return GMShowNavMeshRsp.deserialize(bytes);
    }
}
exports.GMShowNavMeshRsp = GMShowNavMeshRsp;
_GMShowNavMeshRsp_one_of_decls = new WeakMap();