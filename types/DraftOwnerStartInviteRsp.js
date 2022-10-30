"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DraftOwnerStartInviteRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOwnerStartInviteRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DraftOwnerStartInviteRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./DraftInviteFailInfo");
const pb_1 = require("google-protobuf");
class DraftOwnerStartInviteRsp extends pb_1.Message {
    constructor(data) {
        super();
        _DraftOwnerStartInviteRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15], __classPrivateFieldGet(this, _DraftOwnerStartInviteRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("invite_fail_info_list" in data && data.invite_fail_info_list != undefined) {
                this.invite_fail_info_list = data.invite_fail_info_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("wrong_uid" in data && data.wrong_uid != undefined) {
                this.wrong_uid = data.wrong_uid;
            }
            if ("draft_id" in data && data.draft_id != undefined) {
                this.draft_id = data.draft_id;
            }
        }
    }
    get invite_fail_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.DraftInviteFailInfo, 15);
    }
    set invite_fail_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 15, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get wrong_uid() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set wrong_uid(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get draft_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set draft_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new DraftOwnerStartInviteRsp({});
        if (data.invite_fail_info_list != null) {
            message.invite_fail_info_list = data.invite_fail_info_list.map(item => dependency_1.DraftInviteFailInfo.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.wrong_uid != null) {
            message.wrong_uid = data.wrong_uid;
        }
        if (data.draft_id != null) {
            message.draft_id = data.draft_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.invite_fail_info_list != null) {
            data.invite_fail_info_list = this.invite_fail_info_list.map((item) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.wrong_uid != null) {
            data.wrong_uid = this.wrong_uid;
        }
        if (this.draft_id != null) {
            data.draft_id = this.draft_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.invite_fail_info_list.length)
            writer.writeRepeatedMessage(15, this.invite_fail_info_list, (item) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(9, this.retcode);
        if (this.wrong_uid != 0)
            writer.writeUint32(3, this.wrong_uid);
        if (this.draft_id != 0)
            writer.writeUint32(14, this.draft_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DraftOwnerStartInviteRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.invite_fail_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 15, dependency_1.DraftInviteFailInfo.deserialize(reader), dependency_1.DraftInviteFailInfo));
                    break;
                case 9:
                    message.retcode = reader.readInt32();
                    break;
                case 3:
                    message.wrong_uid = reader.readUint32();
                    break;
                case 14:
                    message.draft_id = reader.readUint32();
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
        return DraftOwnerStartInviteRsp.deserialize(bytes);
    }
}
exports.DraftOwnerStartInviteRsp = DraftOwnerStartInviteRsp;
_DraftOwnerStartInviteRsp_one_of_decls = new WeakMap();
