"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TakeCityReputationExploreRewardRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeCityReputationExploreRewardRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TakeCityReputationExploreRewardRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ItemParam");
const pb_1 = require("google-protobuf");
class TakeCityReputationExploreRewardRsp extends pb_1.Message {
    constructor(data) {
        super();
        _TakeCityReputationExploreRewardRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8, 12], __classPrivateFieldGet(this, _TakeCityReputationExploreRewardRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("explore_id_list" in data && data.explore_id_list != undefined) {
                this.explore_id_list = data.explore_id_list;
            }
            if ("item_list" in data && data.item_list != undefined) {
                this.item_list = data.item_list;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("city_id" in data && data.city_id != undefined) {
                this.city_id = data.city_id;
            }
        }
    }
    get explore_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 8, []);
    }
    set explore_id_list(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get item_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 12);
    }
    set item_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get city_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set city_id(value) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data) {
        const message = new TakeCityReputationExploreRewardRsp({});
        if (data.explore_id_list != null) {
            message.explore_id_list = data.explore_id_list;
        }
        if (data.item_list != null) {
            message.item_list = data.item_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.city_id != null) {
            message.city_id = data.city_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.explore_id_list != null) {
            data.explore_id_list = this.explore_id_list;
        }
        if (this.item_list != null) {
            data.item_list = this.item_list.map((item) => item.toObject());
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.city_id != null) {
            data.city_id = this.city_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.explore_id_list.length)
            writer.writePackedUint32(8, this.explore_id_list);
        if (this.item_list.length)
            writer.writeRepeatedMessage(12, this.item_list, (item) => item.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (this.city_id != 0)
            writer.writeUint32(13, this.city_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TakeCityReputationExploreRewardRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.explore_id_list = reader.readPackedUint32();
                    break;
                case 12:
                    reader.readMessage(message.item_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
                    break;
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                case 13:
                    message.city_id = reader.readUint32();
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
        return TakeCityReputationExploreRewardRsp.deserialize(bytes);
    }
}
exports.TakeCityReputationExploreRewardRsp = TakeCityReputationExploreRewardRsp;
_TakeCityReputationExploreRewardRsp_one_of_decls = new WeakMap();
