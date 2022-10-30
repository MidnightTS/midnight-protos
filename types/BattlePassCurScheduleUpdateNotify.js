"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BattlePassCurScheduleUpdateNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassCurScheduleUpdateNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassCurScheduleUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./BattlePassSchedule");
const pb_1 = require("google-protobuf");
class BattlePassCurScheduleUpdateNotify extends pb_1.Message {
    constructor(data) {
        super();
        _BattlePassCurScheduleUpdateNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BattlePassCurScheduleUpdateNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("have_cur_schedule" in data && data.have_cur_schedule != undefined) {
                this.have_cur_schedule = data.have_cur_schedule;
            }
            if ("cur_schedule" in data && data.cur_schedule != undefined) {
                this.cur_schedule = data.cur_schedule;
            }
        }
    }
    get have_cur_schedule() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set have_cur_schedule(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get cur_schedule() {
        return pb_1.Message.getWrapperField(this, dependency_1.BattlePassSchedule, 1);
    }
    set cur_schedule(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_cur_schedule() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new BattlePassCurScheduleUpdateNotify({});
        if (data.have_cur_schedule != null) {
            message.have_cur_schedule = data.have_cur_schedule;
        }
        if (data.cur_schedule != null) {
            message.cur_schedule = dependency_1.BattlePassSchedule.fromObject(data.cur_schedule);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.have_cur_schedule != null) {
            data.have_cur_schedule = this.have_cur_schedule;
        }
        if (this.cur_schedule != null) {
            data.cur_schedule = this.cur_schedule.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.have_cur_schedule != false)
            writer.writeBool(11, this.have_cur_schedule);
        if (this.has_cur_schedule)
            writer.writeMessage(1, this.cur_schedule, () => this.cur_schedule.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassCurScheduleUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.have_cur_schedule = reader.readBool();
                    break;
                case 1:
                    reader.readMessage(message.cur_schedule, () => message.cur_schedule = dependency_1.BattlePassSchedule.deserialize(reader));
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
        return BattlePassCurScheduleUpdateNotify.deserialize(bytes);
    }
}
exports.BattlePassCurScheduleUpdateNotify = BattlePassCurScheduleUpdateNotify;
_BattlePassCurScheduleUpdateNotify_one_of_decls = new WeakMap();