"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BattlePassSchedule_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassSchedule = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BattlePassSchedule.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./BattlePassCycle");
const dependency_2 = require("./BattlePassProduct");
const dependency_3 = require("./BattlePassRewardTag");
const dependency_4 = require("./BattlePassUnlockStatus");
const pb_1 = require("google-protobuf");
class BattlePassSchedule extends pb_1.Message {
    constructor(data) {
        super();
        _BattlePassSchedule_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [11], __classPrivateFieldGet(this, _BattlePassSchedule_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("level" in data && data.level != undefined) {
                this.level = data.level;
            }
            if ("begin_time" in data && data.begin_time != undefined) {
                this.begin_time = data.begin_time;
            }
            if ("end_time" in data && data.end_time != undefined) {
                this.end_time = data.end_time;
            }
            if ("point" in data && data.point != undefined) {
                this.point = data.point;
            }
            if ("cur_cycle" in data && data.cur_cycle != undefined) {
                this.cur_cycle = data.cur_cycle;
            }
            if ("unlock_status" in data && data.unlock_status != undefined) {
                this.unlock_status = data.unlock_status;
            }
            if ("reward_taken_list" in data && data.reward_taken_list != undefined) {
                this.reward_taken_list = data.reward_taken_list;
            }
            if ("cur_cycle_points" in data && data.cur_cycle_points != undefined) {
                this.cur_cycle_points = data.cur_cycle_points;
            }
            if ("Unk2700_ODHAAHEPFAG" in data && data.Unk2700_ODHAAHEPFAG != undefined) {
                this.Unk2700_ODHAAHEPFAG = data.Unk2700_ODHAAHEPFAG;
            }
            if ("product_info" in data && data.product_info != undefined) {
                this.product_info = data.product_info;
            }
            if ("is_extra_paid_reward_taken" in data && data.is_extra_paid_reward_taken != undefined) {
                this.is_extra_paid_reward_taken = data.is_extra_paid_reward_taken;
            }
            if ("is_viewed" in data && data.is_viewed != undefined) {
                this.is_viewed = data.is_viewed;
            }
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
        }
    }
    get level() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set level(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get begin_time() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set begin_time(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get end_time() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set end_time(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get point() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set point(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get cur_cycle() {
        return pb_1.Message.getWrapperField(this, dependency_1.BattlePassCycle, 4);
    }
    set cur_cycle(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_cur_cycle() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get unlock_status() {
        return pb_1.Message.getFieldWithDefault(this, 7, dependency_4.BattlePassUnlockStatus.BATTLE_PASS_UNLOCK_STATUS_INVALID);
    }
    set unlock_status(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get reward_taken_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_3.BattlePassRewardTag, 11);
    }
    set reward_taken_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 11, value);
    }
    get cur_cycle_points() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set cur_cycle_points(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk2700_ODHAAHEPFAG() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set Unk2700_ODHAAHEPFAG(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get product_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.BattlePassProduct, 13);
    }
    set product_info(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_product_info() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get is_extra_paid_reward_taken() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set is_extra_paid_reward_taken(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get is_viewed() {
        return pb_1.Message.getFieldWithDefault(this, 3, false);
    }
    set is_viewed(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data) {
        const message = new BattlePassSchedule({});
        if (data.level != null) {
            message.level = data.level;
        }
        if (data.begin_time != null) {
            message.begin_time = data.begin_time;
        }
        if (data.end_time != null) {
            message.end_time = data.end_time;
        }
        if (data.point != null) {
            message.point = data.point;
        }
        if (data.cur_cycle != null) {
            message.cur_cycle = dependency_1.BattlePassCycle.fromObject(data.cur_cycle);
        }
        if (data.unlock_status != null) {
            message.unlock_status = data.unlock_status;
        }
        if (data.reward_taken_list != null) {
            message.reward_taken_list = data.reward_taken_list.map(item => dependency_3.BattlePassRewardTag.fromObject(item));
        }
        if (data.cur_cycle_points != null) {
            message.cur_cycle_points = data.cur_cycle_points;
        }
        if (data.Unk2700_ODHAAHEPFAG != null) {
            message.Unk2700_ODHAAHEPFAG = data.Unk2700_ODHAAHEPFAG;
        }
        if (data.product_info != null) {
            message.product_info = dependency_2.BattlePassProduct.fromObject(data.product_info);
        }
        if (data.is_extra_paid_reward_taken != null) {
            message.is_extra_paid_reward_taken = data.is_extra_paid_reward_taken;
        }
        if (data.is_viewed != null) {
            message.is_viewed = data.is_viewed;
        }
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.level != null) {
            data.level = this.level;
        }
        if (this.begin_time != null) {
            data.begin_time = this.begin_time;
        }
        if (this.end_time != null) {
            data.end_time = this.end_time;
        }
        if (this.point != null) {
            data.point = this.point;
        }
        if (this.cur_cycle != null) {
            data.cur_cycle = this.cur_cycle.toObject();
        }
        if (this.unlock_status != null) {
            data.unlock_status = this.unlock_status;
        }
        if (this.reward_taken_list != null) {
            data.reward_taken_list = this.reward_taken_list.map((item) => item.toObject());
        }
        if (this.cur_cycle_points != null) {
            data.cur_cycle_points = this.cur_cycle_points;
        }
        if (this.Unk2700_ODHAAHEPFAG != null) {
            data.Unk2700_ODHAAHEPFAG = this.Unk2700_ODHAAHEPFAG;
        }
        if (this.product_info != null) {
            data.product_info = this.product_info.toObject();
        }
        if (this.is_extra_paid_reward_taken != null) {
            data.is_extra_paid_reward_taken = this.is_extra_paid_reward_taken;
        }
        if (this.is_viewed != null) {
            data.is_viewed = this.is_viewed;
        }
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.level != 0)
            writer.writeUint32(14, this.level);
        if (this.begin_time != 0)
            writer.writeUint32(2, this.begin_time);
        if (this.end_time != 0)
            writer.writeUint32(15, this.end_time);
        if (this.point != 0)
            writer.writeUint32(1, this.point);
        if (this.has_cur_cycle)
            writer.writeMessage(4, this.cur_cycle, () => this.cur_cycle.serialize(writer));
        if (this.unlock_status != dependency_4.BattlePassUnlockStatus.BATTLE_PASS_UNLOCK_STATUS_INVALID)
            writer.writeEnum(7, this.unlock_status);
        if (this.reward_taken_list.length)
            writer.writeRepeatedMessage(11, this.reward_taken_list, (item) => item.serialize(writer));
        if (this.cur_cycle_points != 0)
            writer.writeUint32(10, this.cur_cycle_points);
        if (this.Unk2700_ODHAAHEPFAG != 0)
            writer.writeUint32(12, this.Unk2700_ODHAAHEPFAG);
        if (this.has_product_info)
            writer.writeMessage(13, this.product_info, () => this.product_info.serialize(writer));
        if (this.is_extra_paid_reward_taken != false)
            writer.writeBool(6, this.is_extra_paid_reward_taken);
        if (this.is_viewed != false)
            writer.writeBool(3, this.is_viewed);
        if (this.schedule_id != 0)
            writer.writeUint32(9, this.schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BattlePassSchedule();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.level = reader.readUint32();
                    break;
                case 2:
                    message.begin_time = reader.readUint32();
                    break;
                case 15:
                    message.end_time = reader.readUint32();
                    break;
                case 1:
                    message.point = reader.readUint32();
                    break;
                case 4:
                    reader.readMessage(message.cur_cycle, () => message.cur_cycle = dependency_1.BattlePassCycle.deserialize(reader));
                    break;
                case 7:
                    message.unlock_status = reader.readEnum();
                    break;
                case 11:
                    reader.readMessage(message.reward_taken_list, () => pb_1.Message.addToRepeatedWrapperField(message, 11, dependency_3.BattlePassRewardTag.deserialize(reader), dependency_3.BattlePassRewardTag));
                    break;
                case 10:
                    message.cur_cycle_points = reader.readUint32();
                    break;
                case 12:
                    message.Unk2700_ODHAAHEPFAG = reader.readUint32();
                    break;
                case 13:
                    reader.readMessage(message.product_info, () => message.product_info = dependency_2.BattlePassProduct.deserialize(reader));
                    break;
                case 6:
                    message.is_extra_paid_reward_taken = reader.readBool();
                    break;
                case 3:
                    message.is_viewed = reader.readBool();
                    break;
                case 9:
                    message.schedule_id = reader.readUint32();
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
        return BattlePassSchedule.deserialize(bytes);
    }
}
exports.BattlePassSchedule = BattlePassSchedule;
_BattlePassSchedule_one_of_decls = new WeakMap();
