"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvtCostStaminaNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtCostStaminaNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtCostStaminaNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class EvtCostStaminaNotify extends pb_1.Message {
    constructor(data) {
        super();
        _EvtCostStaminaNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _EvtCostStaminaNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("skill_id" in data && data.skill_id != undefined) {
                this.skill_id = data.skill_id;
            }
            if ("cost_stamina" in data && data.cost_stamina != undefined) {
                this.cost_stamina = data.cost_stamina;
            }
        }
    }
    get skill_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set skill_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get cost_stamina() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set cost_stamina(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new EvtCostStaminaNotify({});
        if (data.skill_id != null) {
            message.skill_id = data.skill_id;
        }
        if (data.cost_stamina != null) {
            message.cost_stamina = data.cost_stamina;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.skill_id != null) {
            data.skill_id = this.skill_id;
        }
        if (this.cost_stamina != null) {
            data.cost_stamina = this.cost_stamina;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.skill_id != 0)
            writer.writeUint32(6, this.skill_id);
        if (this.cost_stamina != 0)
            writer.writeFloat(11, this.cost_stamina);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtCostStaminaNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.skill_id = reader.readUint32();
                    break;
                case 11:
                    message.cost_stamina = reader.readFloat();
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
        return EvtCostStaminaNotify.deserialize(bytes);
    }
}
exports.EvtCostStaminaNotify = EvtCostStaminaNotify;
_EvtCostStaminaNotify_one_of_decls = new WeakMap();