"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EvtCreateGadgetNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtCreateGadgetNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtCreateGadgetNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ForwardType");
const dependency_2 = require("./Vector");
const pb_1 = require("google-protobuf");
class EvtCreateGadgetNotify extends pb_1.Message {
    constructor(data) {
        super();
        _EvtCreateGadgetNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [889, 1920], __classPrivateFieldGet(this, _EvtCreateGadgetNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_async_load" in data && data.is_async_load != undefined) {
                this.is_async_load = data.is_async_load;
            }
            if ("camp_type" in data && data.camp_type != undefined) {
                this.camp_type = data.camp_type;
            }
            if ("sight_group_with_owner" in data && data.sight_group_with_owner != undefined) {
                this.sight_group_with_owner = data.sight_group_with_owner;
            }
            if ("Unk2700_BELOIHEIEAN" in data && data.Unk2700_BELOIHEIEAN != undefined) {
                this.Unk2700_BELOIHEIEAN = data.Unk2700_BELOIHEIEAN;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("target_entity_id" in data && data.target_entity_id != undefined) {
                this.target_entity_id = data.target_entity_id;
            }
            if ("camp_id" in data && data.camp_id != undefined) {
                this.camp_id = data.camp_id;
            }
            if ("guid" in data && data.guid != undefined) {
                this.guid = data.guid;
            }
            if ("init_euler_angles" in data && data.init_euler_angles != undefined) {
                this.init_euler_angles = data.init_euler_angles;
            }
            if ("target_lock_point_index" in data && data.target_lock_point_index != undefined) {
                this.target_lock_point_index = data.target_lock_point_index;
            }
            if ("Unk2700_JDNFLLGJBGA" in data && data.Unk2700_JDNFLLGJBGA != undefined) {
                this.Unk2700_JDNFLLGJBGA = data.Unk2700_JDNFLLGJBGA;
            }
            if ("init_pos" in data && data.init_pos != undefined) {
                this.init_pos = data.init_pos;
            }
            if ("owner_entity_id" in data && data.owner_entity_id != undefined) {
                this.owner_entity_id = data.owner_entity_id;
            }
            if ("room_id" in data && data.room_id != undefined) {
                this.room_id = data.room_id;
            }
            if ("Unk2700_JBOPENAGGAF" in data && data.Unk2700_JBOPENAGGAF != undefined) {
                this.Unk2700_JBOPENAGGAF = data.Unk2700_JBOPENAGGAF;
            }
            if ("prop_owner_entity_id" in data && data.prop_owner_entity_id != undefined) {
                this.prop_owner_entity_id = data.prop_owner_entity_id;
            }
            if ("Unk2700_IHIDGKPHFME" in data && data.Unk2700_IHIDGKPHFME != undefined) {
                this.Unk2700_IHIDGKPHFME = data.Unk2700_IHIDGKPHFME;
            }
            if ("config_id" in data && data.config_id != undefined) {
                this.config_id = data.config_id;
            }
        }
    }
    get is_async_load() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set is_async_load(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get camp_type() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set camp_type(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get sight_group_with_owner() {
        return pb_1.Message.getFieldWithDefault(this, 10, false);
    }
    set sight_group_with_owner(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk2700_BELOIHEIEAN() {
        return pb_1.Message.getFieldWithDefault(this, 889, []);
    }
    set Unk2700_BELOIHEIEAN(value) {
        pb_1.Message.setField(this, 889, value);
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 12, dependency_1.ForwardType.FORWARD_TYPE_LOCAL);
    }
    set forward_type(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get target_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0);
    }
    set target_entity_id(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get camp_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set camp_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get guid() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set guid(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get init_euler_angles() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 13);
    }
    set init_euler_angles(value) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_init_euler_angles() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get target_lock_point_index() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set target_lock_point_index(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get Unk2700_JDNFLLGJBGA() {
        return pb_1.Message.getFieldWithDefault(this, 1920, []);
    }
    set Unk2700_JDNFLLGJBGA(value) {
        pb_1.Message.setField(this, 1920, value);
    }
    get init_pos() {
        return pb_1.Message.getWrapperField(this, dependency_2.Vector, 4);
    }
    set init_pos(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_init_pos() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get owner_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0);
    }
    set owner_entity_id(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get room_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set room_id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get Unk2700_JBOPENAGGAF() {
        return pb_1.Message.getFieldWithDefault(this, 25, false);
    }
    set Unk2700_JBOPENAGGAF(value) {
        pb_1.Message.setField(this, 25, value);
    }
    get prop_owner_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set prop_owner_entity_id(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2700_IHIDGKPHFME() {
        return pb_1.Message.getFieldWithDefault(this, 379, false);
    }
    set Unk2700_IHIDGKPHFME(value) {
        pb_1.Message.setField(this, 379, value);
    }
    get config_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set config_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new EvtCreateGadgetNotify({});
        if (data.is_async_load != null) {
            message.is_async_load = data.is_async_load;
        }
        if (data.camp_type != null) {
            message.camp_type = data.camp_type;
        }
        if (data.sight_group_with_owner != null) {
            message.sight_group_with_owner = data.sight_group_with_owner;
        }
        if (data.Unk2700_BELOIHEIEAN != null) {
            message.Unk2700_BELOIHEIEAN = data.Unk2700_BELOIHEIEAN;
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.target_entity_id != null) {
            message.target_entity_id = data.target_entity_id;
        }
        if (data.camp_id != null) {
            message.camp_id = data.camp_id;
        }
        if (data.guid != null) {
            message.guid = data.guid;
        }
        if (data.init_euler_angles != null) {
            message.init_euler_angles = dependency_2.Vector.fromObject(data.init_euler_angles);
        }
        if (data.target_lock_point_index != null) {
            message.target_lock_point_index = data.target_lock_point_index;
        }
        if (data.Unk2700_JDNFLLGJBGA != null) {
            message.Unk2700_JDNFLLGJBGA = data.Unk2700_JDNFLLGJBGA;
        }
        if (data.init_pos != null) {
            message.init_pos = dependency_2.Vector.fromObject(data.init_pos);
        }
        if (data.owner_entity_id != null) {
            message.owner_entity_id = data.owner_entity_id;
        }
        if (data.room_id != null) {
            message.room_id = data.room_id;
        }
        if (data.Unk2700_JBOPENAGGAF != null) {
            message.Unk2700_JBOPENAGGAF = data.Unk2700_JBOPENAGGAF;
        }
        if (data.prop_owner_entity_id != null) {
            message.prop_owner_entity_id = data.prop_owner_entity_id;
        }
        if (data.Unk2700_IHIDGKPHFME != null) {
            message.Unk2700_IHIDGKPHFME = data.Unk2700_IHIDGKPHFME;
        }
        if (data.config_id != null) {
            message.config_id = data.config_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.is_async_load != null) {
            data.is_async_load = this.is_async_load;
        }
        if (this.camp_type != null) {
            data.camp_type = this.camp_type;
        }
        if (this.sight_group_with_owner != null) {
            data.sight_group_with_owner = this.sight_group_with_owner;
        }
        if (this.Unk2700_BELOIHEIEAN != null) {
            data.Unk2700_BELOIHEIEAN = this.Unk2700_BELOIHEIEAN;
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.target_entity_id != null) {
            data.target_entity_id = this.target_entity_id;
        }
        if (this.camp_id != null) {
            data.camp_id = this.camp_id;
        }
        if (this.guid != null) {
            data.guid = this.guid;
        }
        if (this.init_euler_angles != null) {
            data.init_euler_angles = this.init_euler_angles.toObject();
        }
        if (this.target_lock_point_index != null) {
            data.target_lock_point_index = this.target_lock_point_index;
        }
        if (this.Unk2700_JDNFLLGJBGA != null) {
            data.Unk2700_JDNFLLGJBGA = this.Unk2700_JDNFLLGJBGA;
        }
        if (this.init_pos != null) {
            data.init_pos = this.init_pos.toObject();
        }
        if (this.owner_entity_id != null) {
            data.owner_entity_id = this.owner_entity_id;
        }
        if (this.room_id != null) {
            data.room_id = this.room_id;
        }
        if (this.Unk2700_JBOPENAGGAF != null) {
            data.Unk2700_JBOPENAGGAF = this.Unk2700_JBOPENAGGAF;
        }
        if (this.prop_owner_entity_id != null) {
            data.prop_owner_entity_id = this.prop_owner_entity_id;
        }
        if (this.Unk2700_IHIDGKPHFME != null) {
            data.Unk2700_IHIDGKPHFME = this.Unk2700_IHIDGKPHFME;
        }
        if (this.config_id != null) {
            data.config_id = this.config_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_async_load != false)
            writer.writeBool(8, this.is_async_load);
        if (this.camp_type != 0)
            writer.writeUint32(5, this.camp_type);
        if (this.sight_group_with_owner != false)
            writer.writeBool(10, this.sight_group_with_owner);
        if (this.Unk2700_BELOIHEIEAN.length)
            writer.writePackedUint32(889, this.Unk2700_BELOIHEIEAN);
        if (this.forward_type != dependency_1.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(12, this.forward_type);
        if (this.entity_id != 0)
            writer.writeUint32(2, this.entity_id);
        if (this.target_entity_id != 0)
            writer.writeUint32(3, this.target_entity_id);
        if (this.camp_id != 0)
            writer.writeUint32(15, this.camp_id);
        if (this.guid != 0)
            writer.writeUint64(6, this.guid);
        if (this.has_init_euler_angles)
            writer.writeMessage(13, this.init_euler_angles, () => this.init_euler_angles.serialize(writer));
        if (this.target_lock_point_index != 0)
            writer.writeUint32(11, this.target_lock_point_index);
        if (this.Unk2700_JDNFLLGJBGA.length)
            writer.writePackedUint32(1920, this.Unk2700_JDNFLLGJBGA);
        if (this.has_init_pos)
            writer.writeMessage(4, this.init_pos, () => this.init_pos.serialize(writer));
        if (this.owner_entity_id != 0)
            writer.writeUint32(9, this.owner_entity_id);
        if (this.room_id != 0)
            writer.writeUint32(7, this.room_id);
        if (this.Unk2700_JBOPENAGGAF != false)
            writer.writeBool(25, this.Unk2700_JBOPENAGGAF);
        if (this.prop_owner_entity_id != 0)
            writer.writeUint32(1, this.prop_owner_entity_id);
        if (this.Unk2700_IHIDGKPHFME != false)
            writer.writeBool(379, this.Unk2700_IHIDGKPHFME);
        if (this.config_id != 0)
            writer.writeUint32(14, this.config_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtCreateGadgetNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.is_async_load = reader.readBool();
                    break;
                case 5:
                    message.camp_type = reader.readUint32();
                    break;
                case 10:
                    message.sight_group_with_owner = reader.readBool();
                    break;
                case 889:
                    message.Unk2700_BELOIHEIEAN = reader.readPackedUint32();
                    break;
                case 12:
                    message.forward_type = reader.readEnum();
                    break;
                case 2:
                    message.entity_id = reader.readUint32();
                    break;
                case 3:
                    message.target_entity_id = reader.readUint32();
                    break;
                case 15:
                    message.camp_id = reader.readUint32();
                    break;
                case 6:
                    message.guid = reader.readUint64();
                    break;
                case 13:
                    reader.readMessage(message.init_euler_angles, () => message.init_euler_angles = dependency_2.Vector.deserialize(reader));
                    break;
                case 11:
                    message.target_lock_point_index = reader.readUint32();
                    break;
                case 1920:
                    message.Unk2700_JDNFLLGJBGA = reader.readPackedUint32();
                    break;
                case 4:
                    reader.readMessage(message.init_pos, () => message.init_pos = dependency_2.Vector.deserialize(reader));
                    break;
                case 9:
                    message.owner_entity_id = reader.readUint32();
                    break;
                case 7:
                    message.room_id = reader.readUint32();
                    break;
                case 25:
                    message.Unk2700_JBOPENAGGAF = reader.readBool();
                    break;
                case 1:
                    message.prop_owner_entity_id = reader.readUint32();
                    break;
                case 379:
                    message.Unk2700_IHIDGKPHFME = reader.readBool();
                    break;
                case 14:
                    message.config_id = reader.readUint32();
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
        return EvtCreateGadgetNotify.deserialize(bytes);
    }
}
exports.EvtCreateGadgetNotify = EvtCreateGadgetNotify;
_EvtCreateGadgetNotify_one_of_decls = new WeakMap();
