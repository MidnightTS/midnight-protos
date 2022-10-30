"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InBattleMechanicusCardInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusCardInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: InBattleMechanicusCardInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./InBattleMechanicusCardChallengeState");
const pb_1 = require("google-protobuf");
class InBattleMechanicusCardInfo extends pb_1.Message {
    constructor(data) {
        super();
        _InBattleMechanicusCardInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _InBattleMechanicusCardInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("rand_effect_id" in data && data.rand_effect_id != undefined) {
                this.rand_effect_id = data.rand_effect_id;
            }
            if ("end_round" in data && data.end_round != undefined) {
                this.end_round = data.end_round;
            }
            if ("challenge_state" in data && data.challenge_state != undefined) {
                this.challenge_state = data.challenge_state;
            }
            if ("cost_points" in data && data.cost_points != undefined) {
                this.cost_points = data.cost_points;
            }
            if ("card_id" in data && data.card_id != undefined) {
                this.card_id = data.card_id;
            }
            if ("begin_round" in data && data.begin_round != undefined) {
                this.begin_round = data.begin_round;
            }
        }
    }
    get rand_effect_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set rand_effect_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get end_round() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set end_round(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get challenge_state() {
        return pb_1.Message.getFieldWithDefault(this, 5, dependency_1.InBattleMechanicusCardChallengeState.IN_BATTLE_MECHANICUS_CARD_CHALLENGE_STATE_NONE);
    }
    set challenge_state(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get cost_points() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set cost_points(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get card_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set card_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get begin_round() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set begin_round(value) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data) {
        const message = new InBattleMechanicusCardInfo({});
        if (data.rand_effect_id != null) {
            message.rand_effect_id = data.rand_effect_id;
        }
        if (data.end_round != null) {
            message.end_round = data.end_round;
        }
        if (data.challenge_state != null) {
            message.challenge_state = data.challenge_state;
        }
        if (data.cost_points != null) {
            message.cost_points = data.cost_points;
        }
        if (data.card_id != null) {
            message.card_id = data.card_id;
        }
        if (data.begin_round != null) {
            message.begin_round = data.begin_round;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.rand_effect_id != null) {
            data.rand_effect_id = this.rand_effect_id;
        }
        if (this.end_round != null) {
            data.end_round = this.end_round;
        }
        if (this.challenge_state != null) {
            data.challenge_state = this.challenge_state;
        }
        if (this.cost_points != null) {
            data.cost_points = this.cost_points;
        }
        if (this.card_id != null) {
            data.card_id = this.card_id;
        }
        if (this.begin_round != null) {
            data.begin_round = this.begin_round;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rand_effect_id != 0)
            writer.writeUint32(12, this.rand_effect_id);
        if (this.end_round != 0)
            writer.writeUint32(3, this.end_round);
        if (this.challenge_state != dependency_1.InBattleMechanicusCardChallengeState.IN_BATTLE_MECHANICUS_CARD_CHALLENGE_STATE_NONE)
            writer.writeEnum(5, this.challenge_state);
        if (this.cost_points != 0)
            writer.writeUint32(1, this.cost_points);
        if (this.card_id != 0)
            writer.writeUint32(11, this.card_id);
        if (this.begin_round != 0)
            writer.writeUint32(8, this.begin_round);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InBattleMechanicusCardInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.rand_effect_id = reader.readUint32();
                    break;
                case 3:
                    message.end_round = reader.readUint32();
                    break;
                case 5:
                    message.challenge_state = reader.readEnum();
                    break;
                case 1:
                    message.cost_points = reader.readUint32();
                    break;
                case 11:
                    message.card_id = reader.readUint32();
                    break;
                case 8:
                    message.begin_round = reader.readUint32();
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
        return InBattleMechanicusCardInfo.deserialize(bytes);
    }
}
exports.InBattleMechanicusCardInfo = InBattleMechanicusCardInfo;
_InBattleMechanicusCardInfo_one_of_decls = new WeakMap();
