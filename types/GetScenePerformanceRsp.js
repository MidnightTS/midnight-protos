"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetScenePerformanceRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScenePerformanceRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetScenePerformanceRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Vector");
const pb_1 = require("google-protobuf");
class GetScenePerformanceRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetScenePerformanceRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetScenePerformanceRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("monster_num" in data && data.monster_num != undefined) {
                this.monster_num = data.monster_num;
            }
            if ("gather_num_insight" in data && data.gather_num_insight != undefined) {
                this.gather_num_insight = data.gather_num_insight;
            }
            if ("gadget_num" in data && data.gadget_num != undefined) {
                this.gadget_num = data.gadget_num;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("dynamic_group_num" in data && data.dynamic_group_num != undefined) {
                this.dynamic_group_num = data.dynamic_group_num;
            }
            if ("group_num" in data && data.group_num != undefined) {
                this.group_num = data.group_num;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("entity_num" in data && data.entity_num != undefined) {
                this.entity_num = data.entity_num;
            }
            if ("gather_num" in data && data.gather_num != undefined) {
                this.gather_num = data.gather_num;
            }
        }
    }
    get monster_num() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set monster_num(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get gather_num_insight() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set gather_num_insight(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get gadget_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set gadget_num(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get dynamic_group_num() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set dynamic_group_num(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get group_num() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set group_num(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 4);
    }
    set pos(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get entity_num() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set entity_num(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get gather_num() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set gather_num(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new GetScenePerformanceRsp({});
        if (data.monster_num != null) {
            message.monster_num = data.monster_num;
        }
        if (data.gather_num_insight != null) {
            message.gather_num_insight = data.gather_num_insight;
        }
        if (data.gadget_num != null) {
            message.gadget_num = data.gadget_num;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.dynamic_group_num != null) {
            message.dynamic_group_num = data.dynamic_group_num;
        }
        if (data.group_num != null) {
            message.group_num = data.group_num;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.entity_num != null) {
            message.entity_num = data.entity_num;
        }
        if (data.gather_num != null) {
            message.gather_num = data.gather_num;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.monster_num != null) {
            data.monster_num = this.monster_num;
        }
        if (this.gather_num_insight != null) {
            data.gather_num_insight = this.gather_num_insight;
        }
        if (this.gadget_num != null) {
            data.gadget_num = this.gadget_num;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.dynamic_group_num != null) {
            data.dynamic_group_num = this.dynamic_group_num;
        }
        if (this.group_num != null) {
            data.group_num = this.group_num;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.entity_num != null) {
            data.entity_num = this.entity_num;
        }
        if (this.gather_num != null) {
            data.gather_num = this.gather_num;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.monster_num != 0)
            writer.writeUint32(9, this.monster_num);
        if (this.gather_num_insight != 0)
            writer.writeUint32(1, this.gather_num_insight);
        if (this.gadget_num != 0)
            writer.writeUint32(6, this.gadget_num);
        if (this.retcode != 0)
            writer.writeInt32(7, this.retcode);
        if (this.dynamic_group_num != 0)
            writer.writeUint32(12, this.dynamic_group_num);
        if (this.group_num != 0)
            writer.writeUint32(2, this.group_num);
        if (this.has_pos)
            writer.writeMessage(4, this.pos, () => this.pos.serialize(writer));
        if (this.entity_num != 0)
            writer.writeUint32(8, this.entity_num);
        if (this.gather_num != 0)
            writer.writeUint32(13, this.gather_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetScenePerformanceRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.monster_num = reader.readUint32();
                    break;
                case 1:
                    message.gather_num_insight = reader.readUint32();
                    break;
                case 6:
                    message.gadget_num = reader.readUint32();
                    break;
                case 7:
                    message.retcode = reader.readInt32();
                    break;
                case 12:
                    message.dynamic_group_num = reader.readUint32();
                    break;
                case 2:
                    message.group_num = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 8:
                    message.entity_num = reader.readUint32();
                    break;
                case 13:
                    message.gather_num = reader.readUint32();
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
        return GetScenePerformanceRsp.deserialize(bytes);
    }
}
exports.GetScenePerformanceRsp = GetScenePerformanceRsp;
_GetScenePerformanceRsp_one_of_decls = new WeakMap();