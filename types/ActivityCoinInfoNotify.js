"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ActivityCoinInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCoinInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ActivityCoinInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ActivityCoinInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _ActivityCoinInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ActivityCoinInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("activity_coin_map" in data && data.activity_coin_map != undefined) {
                this.activity_coin_map = data.activity_coin_map;
            }
        }
        if (!this.activity_coin_map)
            this.activity_coin_map = new Map();
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get activity_coin_map() {
        return pb_1.Message.getField(this, 2);
    }
    set activity_coin_map(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new ActivityCoinInfoNotify({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (typeof data.activity_coin_map == "object") {
            message.activity_coin_map = new Map(Object.entries(data.activity_coin_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.activity_coin_map.size > 0) {
            data.activity_coin_map = (Object.fromEntries)(this.activity_coin_map);
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(8, this.schedule_id);
        if (this.activity_id != 0)
            writer.writeUint32(10, this.activity_id);
        for (const [key, value] of this.activity_coin_map) {
            writer.writeMessage(2, this.activity_coin_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ActivityCoinInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.schedule_id = reader.readUint32();
                    break;
                case 10:
                    message.activity_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.activity_coin_map, reader, reader.readUint32, reader.readUint32));
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
        return ActivityCoinInfoNotify.deserialize(bytes);
    }
}
exports.ActivityCoinInfoNotify = ActivityCoinInfoNotify;
_ActivityCoinInfoNotify_one_of_decls = new WeakMap();
