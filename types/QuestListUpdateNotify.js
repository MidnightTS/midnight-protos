"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuestListUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestListUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuestListUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Quest");
const pb_1 = require("google-protobuf");
class QuestListUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _QuestListUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [6], __classPrivateFieldGet(this, _QuestListUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("quest_list" in data && data.quest_list != undefined) {
                this.quest_list = data.quest_list;
            }
        }
    }
    get quest_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Quest, 6);
    }
    set quest_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    static fromObject(data) {
        const message = new QuestListUpdateNotify({});
        if (data.quest_list != null) {
            message.quest_list = data.quest_list.map(item => dependency_1.Quest.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.quest_list != null) {
            data.quest_list = this.quest_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.quest_list.length)
            writer.writeRepeatedMessage(6, this.quest_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuestListUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    reader.readMessage(message.quest_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.Quest.deserialize(reader), dependency_1.Quest));
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
        return QuestListUpdateNotify.deserialize(bytes);
    }
}
exports.QuestListUpdateNotify = QuestListUpdateNotify;
_QuestListUpdateNotify_one_of_decls = new WeakMap();
