"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SumoSelectTeamAndEnterDungeonRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSelectTeamAndEnterDungeonRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoSelectTeamAndEnterDungeonRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SumoTeamData");
const pb_1 = require("google-protobuf");
class SumoSelectTeamAndEnterDungeonRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SumoSelectTeamAndEnterDungeonRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(this, _SumoSelectTeamAndEnterDungeonRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("team_list" in data && data.team_list != undefined) {
                this.team_list = data.team_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set difficulty_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get team_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SumoTeamData, 2);
    }
    set team_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data) {
        const message = new SumoSelectTeamAndEnterDungeonRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.team_list != null) {
            message.team_list = data.team_list.map(item => dependency_1.SumoTeamData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.team_list != null) {
            data.team_list = this.team_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(1, this.retcode);
        if (this.activity_id != 0)
            writer.writeUint32(14, this.activity_id);
        if (this.difficulty_id != 0)
            writer.writeUint32(12, this.difficulty_id);
        if (this.stage_id != 0)
            writer.writeUint32(9, this.stage_id);
        if (this.team_list.length)
            writer.writeRepeatedMessage(2, this.team_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoSelectTeamAndEnterDungeonRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    message.activity_id = reader.readUint32();
                    break;
                case 12:
                    message.difficulty_id = reader.readUint32();
                    break;
                case 9:
                    message.stage_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.team_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.SumoTeamData.deserialize(reader), dependency_1.SumoTeamData));
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
        return SumoSelectTeamAndEnterDungeonRsp.deserialize(bytes);
    }
}
exports.SumoSelectTeamAndEnterDungeonRsp = SumoSelectTeamAndEnterDungeonRsp;
_SumoSelectTeamAndEnterDungeonRsp_one_of_decls = new WeakMap();