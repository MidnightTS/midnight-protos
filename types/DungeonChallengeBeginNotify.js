"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DungeonChallengeBeginNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DungeonChallengeBeginNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonChallengeBeginNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class DungeonChallengeBeginNotify extends pb_1.Message {
    constructor(data) {
        super();
        _DungeonChallengeBeginNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [14, 12], __classPrivateFieldGet(this, _DungeonChallengeBeginNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("father_index" in data && data.father_index != undefined) {
                this.father_index = data.father_index;
            }
            if ("param_list" in data && data.param_list != undefined) {
                this.param_list = data.param_list;
            }
            if ("challenge_index" in data && data.challenge_index != undefined) {
                this.challenge_index = data.challenge_index;
            }
            if ("challenge_id" in data && data.challenge_id != undefined) {
                this.challenge_id = data.challenge_id;
            }
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("uid_list" in data && data.uid_list != undefined) {
                this.uid_list = data.uid_list;
            }
        }
    }
    get father_index() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set father_index(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get param_list() {
        return pb_1.Message.getFieldWithDefault(this, 14, []);
    }
    set param_list(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get challenge_index() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set challenge_index(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get challenge_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set challenge_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set group_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get uid_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []);
    }
    set uid_list(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new DungeonChallengeBeginNotify({});
        if (data.father_index != null) {
            message.father_index = data.father_index;
        }
        if (data.param_list != null) {
            message.param_list = data.param_list;
        }
        if (data.challenge_index != null) {
            message.challenge_index = data.challenge_index;
        }
        if (data.challenge_id != null) {
            message.challenge_id = data.challenge_id;
        }
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.uid_list != null) {
            message.uid_list = data.uid_list;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.father_index != null) {
            data.father_index = this.father_index;
        }
        if (this.param_list != null) {
            data.param_list = this.param_list;
        }
        if (this.challenge_index != null) {
            data.challenge_index = this.challenge_index;
        }
        if (this.challenge_id != null) {
            data.challenge_id = this.challenge_id;
        }
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.uid_list != null) {
            data.uid_list = this.uid_list;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.father_index != 0)
            writer.writeUint32(5, this.father_index);
        if (this.param_list.length)
            writer.writePackedUint32(14, this.param_list);
        if (this.challenge_index != 0)
            writer.writeUint32(6, this.challenge_index);
        if (this.challenge_id != 0)
            writer.writeUint32(1, this.challenge_id);
        if (this.group_id != 0)
            writer.writeUint32(4, this.group_id);
        if (this.uid_list.length)
            writer.writePackedUint32(12, this.uid_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonChallengeBeginNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.father_index = reader.readUint32();
                    break;
                case 14:
                    message.param_list = reader.readPackedUint32();
                    break;
                case 6:
                    message.challenge_index = reader.readUint32();
                    break;
                case 1:
                    message.challenge_id = reader.readUint32();
                    break;
                case 4:
                    message.group_id = reader.readUint32();
                    break;
                case 12:
                    message.uid_list = reader.readPackedUint32();
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
        return DungeonChallengeBeginNotify.deserialize(bytes);
    }
}
exports.DungeonChallengeBeginNotify = DungeonChallengeBeginNotify;
_DungeonChallengeBeginNotify_one_of_decls = new WeakMap();
