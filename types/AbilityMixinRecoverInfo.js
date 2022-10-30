"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbilityMixinRecoverInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinRecoverInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityMixinRecoverInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./MassivePropSyncInfo");
const pb_1 = require("google-protobuf");
class AbilityMixinRecoverInfo extends pb_1.Message {
    constructor(data) {
        super();
        _AbilityMixinRecoverInfo_one_of_decls.set(this, [[1, 2]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 6], __classPrivateFieldGet(this, _AbilityMixinRecoverInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("local_id" in data && data.local_id != undefined) {
                this.local_id = data.local_id;
            }
            if ("data_list" in data && data.data_list != undefined) {
                this.data_list = data.data_list;
            }
            if ("is_serverbuff_modifier" in data && data.is_serverbuff_modifier != undefined) {
                this.is_serverbuff_modifier = data.is_serverbuff_modifier;
            }
            if ("massive_prop_list" in data && data.massive_prop_list != undefined) {
                this.massive_prop_list = data.massive_prop_list;
            }
            if ("instanced_ability_id" in data && data.instanced_ability_id != undefined) {
                this.instanced_ability_id = data.instanced_ability_id;
            }
            if ("instanced_modifier_id" in data && data.instanced_modifier_id != undefined) {
                this.instanced_modifier_id = data.instanced_modifier_id;
            }
        }
    }
    get local_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set local_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get data_list() {
        return pb_1.Message.getFieldWithDefault(this, 4, []);
    }
    set data_list(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_serverbuff_modifier() {
        return pb_1.Message.getFieldWithDefault(this, 5, false);
    }
    set is_serverbuff_modifier(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get massive_prop_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.MassivePropSyncInfo, 6);
    }
    set massive_prop_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get instanced_ability_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set instanced_ability_id(value) {
        pb_1.Message.setOneofField(this, 1, __classPrivateFieldGet(this, _AbilityMixinRecoverInfo_one_of_decls, "f")[0], value);
    }
    get has_instanced_ability_id() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get instanced_modifier_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set instanced_modifier_id(value) {
        pb_1.Message.setOneofField(this, 2, __classPrivateFieldGet(this, _AbilityMixinRecoverInfo_one_of_decls, "f")[0], value);
    }
    get has_instanced_modifier_id() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get source() {
        const cases = {
            0: "none",
            1: "instanced_ability_id",
            2: "instanced_modifier_id"
        };
        return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
    }
    static fromObject(data) {
        const message = new AbilityMixinRecoverInfo({});
        if (data.local_id != null) {
            message.local_id = data.local_id;
        }
        if (data.data_list != null) {
            message.data_list = data.data_list;
        }
        if (data.is_serverbuff_modifier != null) {
            message.is_serverbuff_modifier = data.is_serverbuff_modifier;
        }
        if (data.massive_prop_list != null) {
            message.massive_prop_list = data.massive_prop_list.map(item => dependency_1.MassivePropSyncInfo.fromObject(item));
        }
        if (data.instanced_ability_id != null) {
            message.instanced_ability_id = data.instanced_ability_id;
        }
        if (data.instanced_modifier_id != null) {
            message.instanced_modifier_id = data.instanced_modifier_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.local_id != null) {
            data.local_id = this.local_id;
        }
        if (this.data_list != null) {
            data.data_list = this.data_list;
        }
        if (this.is_serverbuff_modifier != null) {
            data.is_serverbuff_modifier = this.is_serverbuff_modifier;
        }
        if (this.massive_prop_list != null) {
            data.massive_prop_list = this.massive_prop_list.map((item) => item.toObject());
        }
        if (this.instanced_ability_id != null) {
            data.instanced_ability_id = this.instanced_ability_id;
        }
        if (this.instanced_modifier_id != null) {
            data.instanced_modifier_id = this.instanced_modifier_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.local_id != 0)
            writer.writeUint32(3, this.local_id);
        if (this.data_list.length)
            writer.writePackedUint32(4, this.data_list);
        if (this.is_serverbuff_modifier != false)
            writer.writeBool(5, this.is_serverbuff_modifier);
        if (this.massive_prop_list.length)
            writer.writeRepeatedMessage(6, this.massive_prop_list, (item) => item.serialize(writer));
        if (this.has_instanced_ability_id)
            writer.writeUint32(1, this.instanced_ability_id);
        if (this.has_instanced_modifier_id)
            writer.writeUint32(2, this.instanced_modifier_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityMixinRecoverInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.local_id = reader.readUint32();
                    break;
                case 4:
                    message.data_list = reader.readPackedUint32();
                    break;
                case 5:
                    message.is_serverbuff_modifier = reader.readBool();
                    break;
                case 6:
                    reader.readMessage(message.massive_prop_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_1.MassivePropSyncInfo.deserialize(reader), dependency_1.MassivePropSyncInfo));
                    break;
                case 1:
                    message.instanced_ability_id = reader.readUint32();
                    break;
                case 2:
                    message.instanced_modifier_id = reader.readUint32();
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
        return AbilityMixinRecoverInfo.deserialize(bytes);
    }
}
exports.AbilityMixinRecoverInfo = AbilityMixinRecoverInfo;
_AbilityMixinRecoverInfo_one_of_decls = new WeakMap();