"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SealBattleBeginNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealBattleBeginNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SealBattleBeginNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SealBattleType");
const pb_1 = require("google-protobuf");
class SealBattleBeginNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SealBattleBeginNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SealBattleBeginNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("seal_max_progress" in data && data.seal_max_progress != undefined) {
                this.seal_max_progress = data.seal_max_progress;
            }
            if ("seal_entity_id" in data && data.seal_entity_id != undefined) {
                this.seal_entity_id = data.seal_entity_id;
            }
            if ("seal_radius" in data && data.seal_radius != undefined) {
                this.seal_radius = data.seal_radius;
            }
            if ("battle_type" in data && data.battle_type != undefined) {
                this.battle_type = data.battle_type;
            }
        }
    }
    get seal_max_progress() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set seal_max_progress(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get seal_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set seal_entity_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get seal_radius() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set seal_radius(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get battle_type() {
        return pb_1.Message.getFieldWithDefault(this, 14, dependency_1.SealBattleType.SEAL_BATTLE_TYPE_KEEP_ALIVE);
    }
    set battle_type(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new SealBattleBeginNotify({});
        if (data.seal_max_progress != null) {
            message.seal_max_progress = data.seal_max_progress;
        }
        if (data.seal_entity_id != null) {
            message.seal_entity_id = data.seal_entity_id;
        }
        if (data.seal_radius != null) {
            message.seal_radius = data.seal_radius;
        }
        if (data.battle_type != null) {
            message.battle_type = data.battle_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.seal_max_progress != null) {
            data.seal_max_progress = this.seal_max_progress;
        }
        if (this.seal_entity_id != null) {
            data.seal_entity_id = this.seal_entity_id;
        }
        if (this.seal_radius != null) {
            data.seal_radius = this.seal_radius;
        }
        if (this.battle_type != null) {
            data.battle_type = this.battle_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.seal_max_progress != 0)
            writer.writeUint32(9, this.seal_max_progress);
        if (this.seal_entity_id != 0)
            writer.writeUint32(1, this.seal_entity_id);
        if (this.seal_radius != 0)
            writer.writeUint32(12, this.seal_radius);
        if (this.battle_type != dependency_1.SealBattleType.SEAL_BATTLE_TYPE_KEEP_ALIVE)
            writer.writeEnum(14, this.battle_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SealBattleBeginNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.seal_max_progress = reader.readUint32();
                    break;
                case 1:
                    message.seal_entity_id = reader.readUint32();
                    break;
                case 12:
                    message.seal_radius = reader.readUint32();
                    break;
                case 14:
                    message.battle_type = reader.readEnum();
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
        return SealBattleBeginNotify.deserialize(bytes);
    }
}
exports.SealBattleBeginNotify = SealBattleBeginNotify;
_SealBattleBeginNotify_one_of_decls = new WeakMap();
