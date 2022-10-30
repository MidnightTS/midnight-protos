"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LifeStateChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeStateChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: LifeStateChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./PlayerDieType");
const dependency_2 = require("./ServerBuff");
const pb_1 = require("google-protobuf");
class LifeStateChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _LifeStateChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _LifeStateChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("server_buff_list" in data && data.server_buff_list != undefined) {
                this.server_buff_list = data.server_buff_list;
            }
            if ("attack_tag" in data && data.attack_tag != undefined) {
                this.attack_tag = data.attack_tag;
            }
            if ("move_reliable_seq" in data && data.move_reliable_seq != undefined) {
                this.move_reliable_seq = data.move_reliable_seq;
            }
            if ("die_type" in data && data.die_type != undefined) {
                this.die_type = data.die_type;
            }
            if ("life_state" in data && data.life_state != undefined) {
                this.life_state = data.life_state;
            }
            if ("source_entity_id" in data && data.source_entity_id != undefined) {
                this.source_entity_id = data.source_entity_id;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get server_buff_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.ServerBuff, 6);
    }
    set server_buff_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get attack_tag() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set attack_tag(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get move_reliable_seq() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set move_reliable_seq(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get die_type() {
        return pb_1.Message.getFieldWithDefault(this, 14, dependency_1.PlayerDieType.PLAYER_DIE_TYPE_NONE);
    }
    set die_type(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get life_state() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set life_state(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get source_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set source_entity_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new LifeStateChangeNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.server_buff_list != null) {
            message.server_buff_list = data.server_buff_list.map(item => dependency_2.ServerBuff.fromObject(item));
        }
        if (data.attack_tag != null) {
            message.attack_tag = data.attack_tag;
        }
        if (data.move_reliable_seq != null) {
            message.move_reliable_seq = data.move_reliable_seq;
        }
        if (data.die_type != null) {
            message.die_type = data.die_type;
        }
        if (data.life_state != null) {
            message.life_state = data.life_state;
        }
        if (data.source_entity_id != null) {
            message.source_entity_id = data.source_entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.server_buff_list != null) {
            data.server_buff_list = this.server_buff_list.map((item) => item.toObject());
        }
        if (this.attack_tag != null) {
            data.attack_tag = this.attack_tag;
        }
        if (this.move_reliable_seq != null) {
            data.move_reliable_seq = this.move_reliable_seq;
        }
        if (this.die_type != null) {
            data.die_type = this.die_type;
        }
        if (this.life_state != null) {
            data.life_state = this.life_state;
        }
        if (this.source_entity_id != null) {
            data.source_entity_id = this.source_entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(4, this.entity_id);
        if (this.server_buff_list.length)
            writer.writeRepeatedMessage(6, this.server_buff_list, (item) => item.serialize(writer));
        if (this.attack_tag.length)
            writer.writeString(7, this.attack_tag);
        if (this.move_reliable_seq != 0)
            writer.writeUint32(15, this.move_reliable_seq);
        if (this.die_type != dependency_1.PlayerDieType.PLAYER_DIE_TYPE_NONE)
            writer.writeEnum(14, this.die_type);
        if (this.life_state != 0)
            writer.writeUint32(5, this.life_state);
        if (this.source_entity_id != 0)
            writer.writeUint32(1, this.source_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LifeStateChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.entity_id = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.server_buff_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.ServerBuff.deserialize(reader), dependency_2.ServerBuff));
                    break;
                case 7:
                    message.attack_tag = reader.readString();
                    break;
                case 15:
                    message.move_reliable_seq = reader.readUint32();
                    break;
                case 14:
                    message.die_type = reader.readEnum();
                    break;
                case 5:
                    message.life_state = reader.readUint32();
                    break;
                case 1:
                    message.source_entity_id = reader.readUint32();
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
        return LifeStateChangeNotify.deserialize(bytes);
    }
}
exports.LifeStateChangeNotify = LifeStateChangeNotify;
_LifeStateChangeNotify_one_of_decls = new WeakMap();
