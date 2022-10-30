"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HomeBlockDotPattern_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlockDotPattern = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HomeBlockDotPattern.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class HomeBlockDotPattern extends pb_1.Message {
    constructor(data) {
        super();
        _HomeBlockDotPattern_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _HomeBlockDotPattern_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("width" in data && data.width != undefined) {
                this.width = data.width;
            }
            if ("height" in data && data.height != undefined) {
                this.height = data.height;
            }
            if ("data" in data && data.data != undefined) {
                this.data = data.data;
            }
        }
    }
    get width() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set width(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get height() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set height(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get data() {
        return pb_1.Message.getFieldWithDefault(this, 9, new Uint8Array());
    }
    set data(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new HomeBlockDotPattern({});
        if (data.width != null) {
            message.width = data.width;
        }
        if (data.height != null) {
            message.height = data.height;
        }
        if (data.data != null) {
            message.data = data.data;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.width != null) {
            data.width = this.width;
        }
        if (this.height != null) {
            data.height = this.height;
        }
        if (this.data != null) {
            data.data = this.data;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.width != 0)
            writer.writeUint32(8, this.width);
        if (this.height != 0)
            writer.writeUint32(11, this.height);
        if (this.data.length)
            writer.writeBytes(9, this.data);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HomeBlockDotPattern();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.width = reader.readUint32();
                    break;
                case 11:
                    message.height = reader.readUint32();
                    break;
                case 9:
                    message.data = reader.readBytes();
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
        return HomeBlockDotPattern.deserialize(bytes);
    }
}
exports.HomeBlockDotPattern = HomeBlockDotPattern;
_HomeBlockDotPattern_one_of_decls = new WeakMap();