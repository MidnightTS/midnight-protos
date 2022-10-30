"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SumoSaveTeamRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoSaveTeamRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoSaveTeamRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./SumoTeamData");
const pb_1 = require("google-protobuf");
class SumoSaveTeamRsp extends pb_1.Message {
    constructor(data) {
        super();
        _SumoSaveTeamRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [13], __classPrivateFieldGet(this, _SumoSaveTeamRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("team_list" in data && data.team_list != undefined) {
                this.team_list = data.team_list;
            }
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set stage_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set activity_id(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get team_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SumoTeamData, 13);
    }
    set team_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 13, value);
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set difficulty_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new SumoSaveTeamRsp({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.team_list != null) {
            message.team_list = data.team_list.map(item => dependency_1.SumoTeamData.fromObject(item));
        }
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.team_list != null) {
            data.team_list = this.team_list.map((item) => item.toObject());
        }
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(9, this.stage_id);
        if (this.retcode != 0)
            writer.writeInt32(2, this.retcode);
        if (this.activity_id != 0)
            writer.writeUint32(11, this.activity_id);
        if (this.team_list.length)
            writer.writeRepeatedMessage(13, this.team_list, (item) => item.serialize(writer));
        if (this.difficulty_id != 0)
            writer.writeUint32(10, this.difficulty_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoSaveTeamRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.stage_id = reader.readUint32();
                    break;
                case 2:
                    message.retcode = reader.readInt32();
                    break;
                case 11:
                    message.activity_id = reader.readUint32();
                    break;
                case 13:
                    reader.readMessage(message.team_list, () => pb_1.Message.addToRepeatedWrapperField(message, 13, dependency_1.SumoTeamData.deserialize(reader), dependency_1.SumoTeamData));
                    break;
                case 10:
                    message.difficulty_id = reader.readUint32();
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
        return SumoSaveTeamRsp.deserialize(bytes);
    }
}
exports.SumoSaveTeamRsp = SumoSaveTeamRsp;
_SumoSaveTeamRsp_one_of_decls = new WeakMap();