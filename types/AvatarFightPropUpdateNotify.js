"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AvatarFightPropUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFightPropUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarFightPropUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class AvatarFightPropUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _AvatarFightPropUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AvatarFightPropUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fight_prop_map" in data && data.fight_prop_map != undefined) {
                this.fight_prop_map = data.fight_prop_map;
            }
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
        }
        if (!this.fight_prop_map)
            this.fight_prop_map = new Map();
    }
    get fight_prop_map() {
        return pb_1.Message.getField(this, 15);
    }
    set fight_prop_map(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set avatar_guid(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new AvatarFightPropUpdateNotify({});
        if (typeof data.fight_prop_map == "object") {
            message.fight_prop_map = new Map(Object.entries(data.fight_prop_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.fight_prop_map.size > 0) {
            data.fight_prop_map = (Object.fromEntries)(this.fight_prop_map);
        }
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.fight_prop_map) {
            writer.writeMessage(15, this.fight_prop_map, () => {
                writer.writeUint32(1, key);
                writer.writeFloat(2, value);
            });
        }
        if (this.avatar_guid != 0)
            writer.writeUint64(13, this.avatar_guid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarFightPropUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.fight_prop_map, reader, reader.readUint32, reader.readFloat));
                    break;
                case 13:
                    message.avatar_guid = reader.readUint64();
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
        return AvatarFightPropUpdateNotify.deserialize(bytes);
    }
}
exports.AvatarFightPropUpdateNotify = AvatarFightPropUpdateNotify;
_AvatarFightPropUpdateNotify_one_of_decls = new WeakMap();