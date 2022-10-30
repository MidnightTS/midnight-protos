"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SummerTimeSprintBoatSettleNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummerTimeSprintBoatSettleNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SummerTimeSprintBoatSettleNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class SummerTimeSprintBoatSettleNotify extends pb_1.Message {
    constructor(data) {
        super();
        _SummerTimeSprintBoatSettleNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SummerTimeSprintBoatSettleNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("total_num" in data && data.total_num != undefined) {
                this.total_num = data.total_num;
            }
            if ("group_id" in data && data.group_id != undefined) {
                this.group_id = data.group_id;
            }
            if ("is_success" in data && data.is_success != undefined) {
                this.is_success = data.is_success;
            }
            if ("collect_num" in data && data.collect_num != undefined) {
                this.collect_num = data.collect_num;
            }
            if ("left_time" in data && data.left_time != undefined) {
                this.left_time = data.left_time;
            }
            if ("medal_level" in data && data.medal_level != undefined) {
                this.medal_level = data.medal_level;
            }
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("is_new_record" in data && data.is_new_record != undefined) {
                this.is_new_record = data.is_new_record;
            }
        }
    }
    get total_num() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set total_num(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get group_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set group_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get is_success() {
        return pb_1.Message.getFieldWithDefault(this, 15, false);
    }
    set is_success(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get collect_num() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set collect_num(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get left_time() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set left_time(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get medal_level() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set medal_level(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set score(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_new_record() {
        return pb_1.Message.getFieldWithDefault(this, 7, false);
    }
    set is_new_record(value) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data) {
        const message = new SummerTimeSprintBoatSettleNotify({});
        if (data.total_num != null) {
            message.total_num = data.total_num;
        }
        if (data.group_id != null) {
            message.group_id = data.group_id;
        }
        if (data.is_success != null) {
            message.is_success = data.is_success;
        }
        if (data.collect_num != null) {
            message.collect_num = data.collect_num;
        }
        if (data.left_time != null) {
            message.left_time = data.left_time;
        }
        if (data.medal_level != null) {
            message.medal_level = data.medal_level;
        }
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.is_new_record != null) {
            message.is_new_record = data.is_new_record;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.total_num != null) {
            data.total_num = this.total_num;
        }
        if (this.group_id != null) {
            data.group_id = this.group_id;
        }
        if (this.is_success != null) {
            data.is_success = this.is_success;
        }
        if (this.collect_num != null) {
            data.collect_num = this.collect_num;
        }
        if (this.left_time != null) {
            data.left_time = this.left_time;
        }
        if (this.medal_level != null) {
            data.medal_level = this.medal_level;
        }
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.is_new_record != null) {
            data.is_new_record = this.is_new_record;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.total_num != 0)
            writer.writeUint32(13, this.total_num);
        if (this.group_id != 0)
            writer.writeUint32(12, this.group_id);
        if (this.is_success != false)
            writer.writeBool(15, this.is_success);
        if (this.collect_num != 0)
            writer.writeUint32(6, this.collect_num);
        if (this.left_time != 0)
            writer.writeUint32(8, this.left_time);
        if (this.medal_level != 0)
            writer.writeUint32(2, this.medal_level);
        if (this.score != 0)
            writer.writeUint32(10, this.score);
        if (this.is_new_record != false)
            writer.writeBool(7, this.is_new_record);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SummerTimeSprintBoatSettleNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.total_num = reader.readUint32();
                    break;
                case 12:
                    message.group_id = reader.readUint32();
                    break;
                case 15:
                    message.is_success = reader.readBool();
                    break;
                case 6:
                    message.collect_num = reader.readUint32();
                    break;
                case 8:
                    message.left_time = reader.readUint32();
                    break;
                case 2:
                    message.medal_level = reader.readUint32();
                    break;
                case 10:
                    message.score = reader.readUint32();
                    break;
                case 7:
                    message.is_new_record = reader.readBool();
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
        return SummerTimeSprintBoatSettleNotify.deserialize(bytes);
    }
}
exports.SummerTimeSprintBoatSettleNotify = SummerTimeSprintBoatSettleNotify;
_SummerTimeSprintBoatSettleNotify_one_of_decls = new WeakMap();