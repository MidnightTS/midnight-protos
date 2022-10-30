"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AsterActivityDetailInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsterActivityDetailInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AsterActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AsterLargeDetailInfo");
const dependency_2 = require("./AsterLittleDetailInfo");
const dependency_3 = require("./AsterMidDetailInfo");
const dependency_4 = require("./AsterProgressDetailInfo");
const pb_1 = require("google-protobuf");
class AsterActivityDetailInfo extends pb_1.Message {
    constructor(data) {
        super();
        _AsterActivityDetailInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _AsterActivityDetailInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("aster_little" in data && data.aster_little != undefined) {
                this.aster_little = data.aster_little;
            }
            if ("aster_credit" in data && data.aster_credit != undefined) {
                this.aster_credit = data.aster_credit;
            }
            if ("aster_large" in data && data.aster_large != undefined) {
                this.aster_large = data.aster_large;
            }
            if ("is_special_reward_taken" in data && data.is_special_reward_taken != undefined) {
                this.is_special_reward_taken = data.is_special_reward_taken;
            }
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("content_close_time" in data && data.content_close_time != undefined) {
                this.content_close_time = data.content_close_time;
            }
            if ("aster_token" in data && data.aster_token != undefined) {
                this.aster_token = data.aster_token;
            }
            if ("aster_mid" in data && data.aster_mid != undefined) {
                this.aster_mid = data.aster_mid;
            }
            if ("aster_progress" in data && data.aster_progress != undefined) {
                this.aster_progress = data.aster_progress;
            }
        }
    }
    get aster_little() {
        return pb_1.Message.getWrapperField(this, dependency_2.AsterLittleDetailInfo, 7);
    }
    set aster_little(value) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_aster_little() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get aster_credit() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set aster_credit(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get aster_large() {
        return pb_1.Message.getWrapperField(this, dependency_1.AsterLargeDetailInfo, 9);
    }
    set aster_large(value) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_aster_large() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get is_special_reward_taken() {
        return pb_1.Message.getFieldWithDefault(this, 1, false);
    }
    set is_special_reward_taken(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set is_content_closed(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get content_close_time() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set content_close_time(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get aster_token() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set aster_token(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get aster_mid() {
        return pb_1.Message.getWrapperField(this, dependency_3.AsterMidDetailInfo, 6);
    }
    set aster_mid(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get has_aster_mid() {
        return pb_1.Message.getField(this, 6) != null;
    }
    get aster_progress() {
        return pb_1.Message.getWrapperField(this, dependency_4.AsterProgressDetailInfo, 2);
    }
    set aster_progress(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_aster_progress() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data) {
        const message = new AsterActivityDetailInfo({});
        if (data.aster_little != null) {
            message.aster_little = dependency_2.AsterLittleDetailInfo.fromObject(data.aster_little);
        }
        if (data.aster_credit != null) {
            message.aster_credit = data.aster_credit;
        }
        if (data.aster_large != null) {
            message.aster_large = dependency_1.AsterLargeDetailInfo.fromObject(data.aster_large);
        }
        if (data.is_special_reward_taken != null) {
            message.is_special_reward_taken = data.is_special_reward_taken;
        }
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.content_close_time != null) {
            message.content_close_time = data.content_close_time;
        }
        if (data.aster_token != null) {
            message.aster_token = data.aster_token;
        }
        if (data.aster_mid != null) {
            message.aster_mid = dependency_3.AsterMidDetailInfo.fromObject(data.aster_mid);
        }
        if (data.aster_progress != null) {
            message.aster_progress = dependency_4.AsterProgressDetailInfo.fromObject(data.aster_progress);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.aster_little != null) {
            data.aster_little = this.aster_little.toObject();
        }
        if (this.aster_credit != null) {
            data.aster_credit = this.aster_credit;
        }
        if (this.aster_large != null) {
            data.aster_large = this.aster_large.toObject();
        }
        if (this.is_special_reward_taken != null) {
            data.is_special_reward_taken = this.is_special_reward_taken;
        }
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.content_close_time != null) {
            data.content_close_time = this.content_close_time;
        }
        if (this.aster_token != null) {
            data.aster_token = this.aster_token;
        }
        if (this.aster_mid != null) {
            data.aster_mid = this.aster_mid.toObject();
        }
        if (this.aster_progress != null) {
            data.aster_progress = this.aster_progress.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_aster_little)
            writer.writeMessage(7, this.aster_little, () => this.aster_little.serialize(writer));
        if (this.aster_credit != 0)
            writer.writeUint32(14, this.aster_credit);
        if (this.has_aster_large)
            writer.writeMessage(9, this.aster_large, () => this.aster_large.serialize(writer));
        if (this.is_special_reward_taken != false)
            writer.writeBool(1, this.is_special_reward_taken);
        if (this.is_content_closed != false)
            writer.writeBool(13, this.is_content_closed);
        if (this.content_close_time != 0)
            writer.writeUint32(8, this.content_close_time);
        if (this.aster_token != 0)
            writer.writeUint32(5, this.aster_token);
        if (this.has_aster_mid)
            writer.writeMessage(6, this.aster_mid, () => this.aster_mid.serialize(writer));
        if (this.has_aster_progress)
            writer.writeMessage(2, this.aster_progress, () => this.aster_progress.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AsterActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    reader.readMessage(message.aster_little, () => message.aster_little = dependency_2.AsterLittleDetailInfo.deserialize(reader));
                    break;
                case 14:
                    message.aster_credit = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.aster_large, () => message.aster_large = dependency_1.AsterLargeDetailInfo.deserialize(reader));
                    break;
                case 1:
                    message.is_special_reward_taken = reader.readBool();
                    break;
                case 13:
                    message.is_content_closed = reader.readBool();
                    break;
                case 8:
                    message.content_close_time = reader.readUint32();
                    break;
                case 5:
                    message.aster_token = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message.aster_mid, () => message.aster_mid = dependency_3.AsterMidDetailInfo.deserialize(reader));
                    break;
                case 2:
                    reader.readMessage(message.aster_progress, () => message.aster_progress = dependency_4.AsterProgressDetailInfo.deserialize(reader));
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
        return AsterActivityDetailInfo.deserialize(bytes);
    }
}
exports.AsterActivityDetailInfo = AsterActivityDetailInfo;
_AsterActivityDetailInfo_one_of_decls = new WeakMap();
