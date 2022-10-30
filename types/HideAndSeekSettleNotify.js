"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HideAndSeekSettleNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HideAndSeekSettleNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: HideAndSeekSettleNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ExhibitionDisplayInfo");
const dependency_2 = require("./HideAndSeekSettleInfo");
const pb_1 = require("google-protobuf");
class HideAndSeekSettleNotify extends pb_1.Message {
    constructor(data) {
        super();
        _HideAndSeekSettleNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 15, 9], __classPrivateFieldGet(this, _HideAndSeekSettleNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cost_time" in data && data.cost_time != undefined) {
                this.cost_time = data.cost_time;
            }
            if ("settle_info_list" in data && data.settle_info_list != undefined) {
                this.settle_info_list = data.settle_info_list;
            }
            if ("winner_list" in data && data.winner_list != undefined) {
                this.winner_list = data.winner_list;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("play_index" in data && data.play_index != undefined) {
                this.play_index = data.play_index;
            }
            if ("is_record_score" in data && data.is_record_score != undefined) {
                this.is_record_score = data.is_record_score;
            }
            if ("score_list" in data && data.score_list != undefined) {
                this.score_list = data.score_list;
            }
            if ("stage_type" in data && data.stage_type != undefined) {
                this.stage_type = data.stage_type;
            }
        }
    }
    get cost_time() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set cost_time(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get settle_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.HideAndSeekSettleInfo, 8);
    }
    set settle_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get winner_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, []);
    }
    set winner_list(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 4, HideAndSeekSettleNotify.SettleReason.SETTLE_REASON_TIME_OUT);
    }
    set reason(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get play_index() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set play_index(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get is_record_score() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_record_score(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get score_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ExhibitionDisplayInfo, 9);
    }
    set score_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get stage_type() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set stage_type(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new HideAndSeekSettleNotify({});
        if (data.cost_time != null) {
            message.cost_time = data.cost_time;
        }
        if (data.settle_info_list != null) {
            message.settle_info_list = data.settle_info_list.map(item => dependency_2.HideAndSeekSettleInfo.fromObject(item));
        }
        if (data.winner_list != null) {
            message.winner_list = data.winner_list;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.play_index != null) {
            message.play_index = data.play_index;
        }
        if (data.is_record_score != null) {
            message.is_record_score = data.is_record_score;
        }
        if (data.score_list != null) {
            message.score_list = data.score_list.map(item => dependency_1.ExhibitionDisplayInfo.fromObject(item));
        }
        if (data.stage_type != null) {
            message.stage_type = data.stage_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.cost_time != null) {
            data.cost_time = this.cost_time;
        }
        if (this.settle_info_list != null) {
            data.settle_info_list = this.settle_info_list.map((item) => item.toObject());
        }
        if (this.winner_list != null) {
            data.winner_list = this.winner_list;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.play_index != null) {
            data.play_index = this.play_index;
        }
        if (this.is_record_score != null) {
            data.is_record_score = this.is_record_score;
        }
        if (this.score_list != null) {
            data.score_list = this.score_list.map((item) => item.toObject());
        }
        if (this.stage_type != null) {
            data.stage_type = this.stage_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cost_time != 0)
            writer.writeUint32(2, this.cost_time);
        if (this.settle_info_list.length)
            writer.writeRepeatedMessage(8, this.settle_info_list, (item) => item.serialize(writer));
        if (this.winner_list.length)
            writer.writePackedUint32(15, this.winner_list);
        if (this.reason != HideAndSeekSettleNotify.SettleReason.SETTLE_REASON_TIME_OUT)
            writer.writeEnum(4, this.reason);
        if (this.play_index != 0)
            writer.writeUint32(13, this.play_index);
        if (this.is_record_score != false)
            writer.writeBool(6, this.is_record_score);
        if (this.score_list.length)
            writer.writeRepeatedMessage(9, this.score_list, (item) => item.serialize(writer));
        if (this.stage_type != 0)
            writer.writeUint32(14, this.stage_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HideAndSeekSettleNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.cost_time = reader.readUint32();
                    break;
                case 8:
                    reader.readMessage(message.settle_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_2.HideAndSeekSettleInfo.deserialize(reader), dependency_2.HideAndSeekSettleInfo));
                    break;
                case 15:
                    message.winner_list = reader.readPackedUint32();
                    break;
                case 4:
                    message.reason = reader.readEnum();
                    break;
                case 13:
                    message.play_index = reader.readUint32();
                    break;
                case 6:
                    message.is_record_score = reader.readBool();
                    break;
                case 9:
                    reader.readMessage(message.score_list, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.ExhibitionDisplayInfo.deserialize(reader), dependency_1.ExhibitionDisplayInfo));
                    break;
                case 14:
                    message.stage_type = reader.readUint32();
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
        return HideAndSeekSettleNotify.deserialize(bytes);
    }
}
exports.HideAndSeekSettleNotify = HideAndSeekSettleNotify;
_HideAndSeekSettleNotify_one_of_decls = new WeakMap();
(function (HideAndSeekSettleNotify) {
    let SettleReason;
    (function (SettleReason) {
        SettleReason[SettleReason["SETTLE_REASON_TIME_OUT"] = 0] = "SETTLE_REASON_TIME_OUT";
        SettleReason[SettleReason["SETTLE_REASON_PLAY_END"] = 1] = "SETTLE_REASON_PLAY_END";
        SettleReason[SettleReason["SETTLE_REASON_PLAYER_QUIT"] = 2] = "SETTLE_REASON_PLAYER_QUIT";
    })(SettleReason = HideAndSeekSettleNotify.SettleReason || (HideAndSeekSettleNotify.SettleReason = {}));
})(HideAndSeekSettleNotify = exports.HideAndSeekSettleNotify || (exports.HideAndSeekSettleNotify = {}));
