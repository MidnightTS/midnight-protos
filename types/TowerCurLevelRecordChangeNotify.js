"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TowerCurLevelRecordChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerCurLevelRecordChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TowerCurLevelRecordChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./TowerCurLevelRecord");
const pb_1 = require("google-protobuf");
class TowerCurLevelRecordChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _TowerCurLevelRecordChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TowerCurLevelRecordChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cur_level_record" in data && data.cur_level_record != undefined) {
                this.cur_level_record = data.cur_level_record;
            }
        }
    }
    get cur_level_record() {
        return pb_1.Message.getWrapperField(this, dependency_1.TowerCurLevelRecord, 10);
    }
    set cur_level_record(value) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_cur_level_record() {
        return pb_1.Message.getField(this, 10) != null;
    }
    static fromObject(data) {
        const message = new TowerCurLevelRecordChangeNotify({});
        if (data.cur_level_record != null) {
            message.cur_level_record = dependency_1.TowerCurLevelRecord.fromObject(data.cur_level_record);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cur_level_record != null) {
            data.cur_level_record = this.cur_level_record.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_cur_level_record)
            writer.writeMessage(10, this.cur_level_record, () => this.cur_level_record.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TowerCurLevelRecordChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    reader.readMessage(message.cur_level_record, () => message.cur_level_record = dependency_1.TowerCurLevelRecord.deserialize(reader));
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
        return TowerCurLevelRecordChangeNotify.deserialize(bytes);
    }
}
exports.TowerCurLevelRecordChangeNotify = TowerCurLevelRecordChangeNotify;
_TowerCurLevelRecordChangeNotify_one_of_decls = new WeakMap();