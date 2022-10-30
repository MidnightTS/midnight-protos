"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlayerInvestigationAllInfoNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInvestigationAllInfoNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerInvestigationAllInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Investigation");
const dependency_2 = require("./InvestigationTarget");
const pb_1 = require("google-protobuf");
class PlayerInvestigationAllInfoNotify extends pb_1.Message {
    constructor(data) {
        super();
        _PlayerInvestigationAllInfoNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15, 12], __classPrivateFieldGet(this, _PlayerInvestigationAllInfoNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("investigation_list" in data && data.investigation_list != undefined) {
                this.investigation_list = data.investigation_list;
            }
            if ("investigation_target_list" in data && data.investigation_target_list != undefined) {
                this.investigation_target_list = data.investigation_target_list;
            }
        }
    }
    get investigation_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.Investigation, 15);
    }
    set investigation_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get investigation_target_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_2.InvestigationTarget, 12);
    }
    set investigation_target_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    static fromObject(data) {
        const message = new PlayerInvestigationAllInfoNotify({});
        if (data.investigation_list != null) {
            message.investigation_list = data.investigation_list.map(item => dependency_1.Investigation.fromObject(item));
        }
        if (data.investigation_target_list != null) {
            message.investigation_target_list = data.investigation_target_list.map(item => dependency_2.InvestigationTarget.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.investigation_list != null) {
            data.investigation_list = this.investigation_list.map((item) => item.toObject());
        }
        if (this.investigation_target_list != null) {
            data.investigation_target_list = this.investigation_target_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.investigation_list.length)
            writer.writeRepeatedMessage(15, this.investigation_list, (item) => item.serialize(writer));
        if (this.investigation_target_list.length)
            writer.writeRepeatedMessage(12, this.investigation_target_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerInvestigationAllInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.investigation_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.Investigation.deserialize(reader), dependency_1.Investigation));
                    break;
                case 12:
                    reader.readMessage(message.investigation_target_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_2.InvestigationTarget.deserialize(reader), dependency_2.InvestigationTarget));
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
        return PlayerInvestigationAllInfoNotify.deserialize(bytes);
    }
}
exports.PlayerInvestigationAllInfoNotify = PlayerInvestigationAllInfoNotify;
_PlayerInvestigationAllInfoNotify_one_of_decls = new WeakMap();
