"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StartRogueNormalCellChallengeRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartRogueNormalCellChallengeRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: StartRogueNormalCellChallengeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class StartRogueNormalCellChallengeRsp extends pb_1.Message {
    constructor(data) {
        super();
        _StartRogueNormalCellChallengeRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _StartRogueNormalCellChallengeRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dungeon_id" in data && data.dungeon_id != undefined) {
                this.dungeon_id = data.dungeon_id;
            }
            if ("cell_id" in data && data.cell_id != undefined) {
                this.cell_id = data.cell_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set dungeon_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get cell_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set cell_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data) {
        const message = new StartRogueNormalCellChallengeRsp({});
        if (data.dungeon_id != null) {
            message.dungeon_id = data.dungeon_id;
        }
        if (data.cell_id != null) {
            message.cell_id = data.cell_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.dungeon_id != null) {
            data.dungeon_id = this.dungeon_id;
        }
        if (this.cell_id != null) {
            data.cell_id = this.cell_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dungeon_id != 0)
            writer.writeUint32(10, this.dungeon_id);
        if (this.cell_id != 0)
            writer.writeUint32(2, this.cell_id);
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StartRogueNormalCellChallengeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.dungeon_id = reader.readUint32();
                    break;
                case 2:
                    message.cell_id = reader.readUint32();
                    break;
                case 6:
                    message.retcode = reader.readInt32();
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
        return StartRogueNormalCellChallengeRsp.deserialize(bytes);
    }
}
exports.StartRogueNormalCellChallengeRsp = StartRogueNormalCellChallengeRsp;
_StartRogueNormalCellChallengeRsp_one_of_decls = new WeakMap();
