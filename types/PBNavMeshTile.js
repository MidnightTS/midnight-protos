"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PBNavMeshTile_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBNavMeshTile = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PBNavMeshTile.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PBNavMeshPoly");
const dependency_2 = require("./Vector");
const pb_1 = require("google-protobuf");
class PBNavMeshTile extends pb_1.Message {
    constructor(data) {
        super();
        _PBNavMeshTile_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 8], __classPrivateFieldGet(this, _PBNavMeshTile_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("vecs" in data && data.vecs != undefined) {
                this.vecs = data.vecs;
            }
            if ("polys" in data && data.polys != undefined) {
                this.polys = data.polys;
            }
        }
    }
    get vecs() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.Vector, 4);
    }
    set vecs(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get polys() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PBNavMeshPoly, 8);
    }
    set polys(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    static fromObject(data) {
        const message = new PBNavMeshTile({});
        if (data.vecs != null) {
            message.vecs = data.vecs.map(item => dependency_2.Vector.fromObject(item));
        }
        if (data.polys != null) {
            message.polys = data.polys.map(item => dependency_1.PBNavMeshPoly.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.vecs != null) {
            data.vecs = this.vecs.map((item) => item.toObject());
        }
        if (this.polys != null) {
            data.polys = this.polys.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.vecs.length)
            writer.writeRepeatedMessage(4, this.vecs, (item) => item.serialize(writer));
        if (this.polys.length)
            writer.writeRepeatedMessage(8, this.polys, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PBNavMeshTile();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.vecs, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.Vector.deserialize(reader), dependency_2.Vector));
                    break;
                case 8:
                    reader.readMessage(message.polys, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_1.PBNavMeshPoly.deserialize(reader), dependency_1.PBNavMeshPoly));
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
        return PBNavMeshTile.deserialize(bytes);
    }
}
exports.PBNavMeshTile = PBNavMeshTile;
_PBNavMeshTile_one_of_decls = new WeakMap();
