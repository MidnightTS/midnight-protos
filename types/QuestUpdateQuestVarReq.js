"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuestUpdateQuestVarReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestUpdateQuestVarReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuestUpdateQuestVarReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./QuestVarOp");
const pb_1 = require("google-protobuf");
class QuestUpdateQuestVarReq extends pb_1.Message {
    constructor(data) {
        super();
        _QuestUpdateQuestVarReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], __classPrivateFieldGet(this, _QuestUpdateQuestVarReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("parent_quest_id" in data && data.parent_quest_id != undefined) {
                this.parent_quest_id = data.parent_quest_id;
            }
            if ("quest_var_op_list" in data && data.quest_var_op_list != undefined) {
                this.quest_var_op_list = data.quest_var_op_list;
            }
            if ("quest_id" in data && data.quest_id != undefined) {
                this.quest_id = data.quest_id;
            }
            if ("parent_quest_var_seq" in data && data.parent_quest_var_seq != undefined) {
                this.parent_quest_var_seq = data.parent_quest_var_seq;
            }
        }
    }
    get parent_quest_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set parent_quest_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get quest_var_op_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.QuestVarOp, 4);
    }
    set quest_var_op_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get quest_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set quest_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get parent_quest_var_seq() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set parent_quest_var_seq(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new QuestUpdateQuestVarReq({});
        if (data.parent_quest_id != null) {
            message.parent_quest_id = data.parent_quest_id;
        }
        if (data.quest_var_op_list != null) {
            message.quest_var_op_list = data.quest_var_op_list.map(item => dependency_1.QuestVarOp.fromObject(item));
        }
        if (data.quest_id != null) {
            message.quest_id = data.quest_id;
        }
        if (data.parent_quest_var_seq != null) {
            message.parent_quest_var_seq = data.parent_quest_var_seq;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.parent_quest_id != null) {
            data.parent_quest_id = this.parent_quest_id;
        }
        if (this.quest_var_op_list != null) {
            data.quest_var_op_list = this.quest_var_op_list.map((item) => item.toObject());
        }
        if (this.quest_id != null) {
            data.quest_id = this.quest_id;
        }
        if (this.parent_quest_var_seq != null) {
            data.parent_quest_var_seq = this.parent_quest_var_seq;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.parent_quest_id != 0)
            writer.writeUint32(9, this.parent_quest_id);
        if (this.quest_var_op_list.length)
            writer.writeRepeatedMessage(4, this.quest_var_op_list, (item) => item.serialize(writer));
        if (this.quest_id != 0)
            writer.writeUint32(11, this.quest_id);
        if (this.parent_quest_var_seq != 0)
            writer.writeUint32(1, this.parent_quest_var_seq);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuestUpdateQuestVarReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.parent_quest_id = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.quest_var_op_list, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.QuestVarOp.deserialize(reader), dependency_1.QuestVarOp));
                    break;
                case 11:
                    message.quest_id = reader.readUint32();
                    break;
                case 1:
                    message.parent_quest_var_seq = reader.readUint32();
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
        return QuestUpdateQuestVarReq.deserialize(bytes);
    }
}
exports.QuestUpdateQuestVarReq = QuestUpdateQuestVarReq;
_QuestUpdateQuestVarReq_one_of_decls = new WeakMap();
