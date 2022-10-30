"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneEntityInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEntityInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneEntityInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./AnimatorParameterValueInfoPair");
const dependency_2 = require("./EntityAuthorityInfo");
const dependency_3 = require("./EntityClientData");
const dependency_4 = require("./EntityEnvironmentInfo");
const dependency_5 = require("./FightPropPair");
const dependency_6 = require("./MotionInfo");
const dependency_7 = require("./PropPair");
const dependency_8 = require("./ProtEntityType");
const dependency_9 = require("./SceneAvatarInfo");
const dependency_10 = require("./SceneGadgetInfo");
const dependency_11 = require("./SceneMonsterInfo");
const dependency_12 = require("./SceneNpcInfo");
const dependency_13 = require("./ServerBuff");
const pb_1 = require("google-protobuf");
class SceneEntityInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneEntityInfo_one_of_decls.set(this, [[10, 11, 12, 13]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5, 6, 9, 20, 22, 23], __classPrivateFieldGet(this, _SceneEntityInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_type" in data && data.entity_type != undefined) {
                this.entity_type = data.entity_type;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("motion_info" in data && data.motion_info != undefined) {
                this.motion_info = data.motion_info;
            }
            if ("prop_list" in data && data.prop_list != undefined) {
                this.prop_list = data.prop_list;
            }
            if ("fight_prop_list" in data && data.fight_prop_list != undefined) {
                this.fight_prop_list = data.fight_prop_list;
            }
            if ("life_state" in data && data.life_state != undefined) {
                this.life_state = data.life_state;
            }
            if ("animator_para_list" in data && data.animator_para_list != undefined) {
                this.animator_para_list = data.animator_para_list;
            }
            if ("last_move_scene_time_ms" in data && data.last_move_scene_time_ms != undefined) {
                this.last_move_scene_time_ms = data.last_move_scene_time_ms;
            }
            if ("last_move_reliable_seq" in data && data.last_move_reliable_seq != undefined) {
                this.last_move_reliable_seq = data.last_move_reliable_seq;
            }
            if ("entity_client_data" in data && data.entity_client_data != undefined) {
                this.entity_client_data = data.entity_client_data;
            }
            if ("entity_environment_info_list" in data && data.entity_environment_info_list != undefined) {
                this.entity_environment_info_list = data.entity_environment_info_list;
            }
            if ("entity_authority_info" in data && data.entity_authority_info != undefined) {
                this.entity_authority_info = data.entity_authority_info;
            }
            if ("tag_list" in data && data.tag_list != undefined) {
                this.tag_list = data.tag_list;
            }
            if ("server_buff_list" in data && data.server_buff_list != undefined) {
                this.server_buff_list = data.server_buff_list;
            }
            if ("avatar" in data && data.avatar != undefined) {
                this.avatar = data.avatar;
            }
            if ("monster" in data && data.monster != undefined) {
                this.monster = data.monster;
            }
            if ("npc" in data && data.npc != undefined) {
                this.npc = data.npc;
            }
            if ("gadget" in data && data.gadget != undefined) {
                this.gadget = data.gadget;
            }
        }
    }
    get entity_type() {
        return pb_1.Message.getFieldWithDefault(this, 1, dependency_8.ProtEntityType.PROT_ENTITY_TYPE_NONE);
    }
    set entity_type(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get name() {
        return pb_1.Message.getFieldWithDefault(this, 3, "");
    }
    set name(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get motion_info() {
        return pb_1.Message.getWrapperField(this, dependency_6.MotionInfo, 4);
    }
    set motion_info(value) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_motion_info() {
        return pb_1.Message.getField(this, 4) != null;
    }
    get prop_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_7.PropPair, 5);
    }
    set prop_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get fight_prop_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_5.FightPropPair, 6);
    }
    set fight_prop_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get life_state() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set life_state(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get animator_para_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.AnimatorParameterValueInfoPair, 9);
    }
    set animator_para_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get last_move_scene_time_ms() {
        return pb_1.Message.getFieldWithDefault(this, 17, 0);
    }
    set last_move_scene_time_ms(value) {
        pb_1.Message.setField(this, 17, value);
    }
    get last_move_reliable_seq() {
        return pb_1.Message.getFieldWithDefault(this, 18, 0);
    }
    set last_move_reliable_seq(value) {
        pb_1.Message.setField(this, 18, value);
    }
    get entity_client_data() {
        return pb_1.Message.getWrapperField(this, dependency_3.EntityClientData, 19);
    }
    set entity_client_data(value) {
        pb_1.Message.setWrapperField(this, 19, value);
    }
    get has_entity_client_data() {
        return pb_1.Message.getField(this, 19) != null;
    }
    get entity_environment_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_4.EntityEnvironmentInfo, 20);
    }
    set entity_environment_info_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 20, value);
    }
    get entity_authority_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.EntityAuthorityInfo, 21);
    }
    set entity_authority_info(value) {
        pb_1.Message.setWrapperField(this, 21, value);
    }
    get has_entity_authority_info() {
        return pb_1.Message.getField(this, 21) != null;
    }
    get tag_list() {
        return pb_1.Message.getFieldWithDefault(this, 22, []);
    }
    set tag_list(value) {
        pb_1.Message.setField(this, 22, value);
    }
    get server_buff_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_13.ServerBuff, 23);
    }
    set server_buff_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 23, value);
    }
    get avatar() {
        return pb_1.Message.getWrapperField(this, dependency_9.SceneAvatarInfo, 10);
    }
    set avatar(value) {
        pb_1.Message.setOneofWrapperField(this, 10, __classPrivateFieldGet(this, _SceneEntityInfo_one_of_decls, "f")[0], value);
    }
    get has_avatar() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get monster() {
        return pb_1.Message.getWrapperField(this, dependency_11.SceneMonsterInfo, 11);
    }
    set monster(value) {
        pb_1.Message.setOneofWrapperField(this, 11, __classPrivateFieldGet(this, _SceneEntityInfo_one_of_decls, "f")[0], value);
    }
    get has_monster() {
        return pb_1.Message.getField(this, 11) != null;
    }
    get npc() {
        return pb_1.Message.getWrapperField(this, dependency_12.SceneNpcInfo, 12);
    }
    set npc(value) {
        pb_1.Message.setOneofWrapperField(this, 12, __classPrivateFieldGet(this, _SceneEntityInfo_one_of_decls, "f")[0], value);
    }
    get has_npc() {
        return pb_1.Message.getField(this, 12) != null;
    }
    get gadget() {
        return pb_1.Message.getWrapperField(this, dependency_10.SceneGadgetInfo, 13);
    }
    set gadget(value) {
        pb_1.Message.setOneofWrapperField(this, 13, __classPrivateFieldGet(this, _SceneEntityInfo_one_of_decls, "f")[0], value);
    }
    get has_gadget() {
        return pb_1.Message.getField(this, 13) != null;
    }
    get entity() {
        const cases = {
            0: "none",
            10: "avatar",
            11: "monster",
            12: "npc",
            13: "gadget"
        };
        return cases[pb_1.Message.computeOneofCase(this, [10, 11, 12, 13])];
    }
    static fromObject(data) {
        const message = new SceneEntityInfo({});
        if (data.entity_type != null) {
            message.entity_type = data.entity_type;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.name != null) {
            message.name = data.name;
        }
        if (data.motion_info != null) {
            message.motion_info = dependency_6.MotionInfo.fromObject(data.motion_info);
        }
        if (data.prop_list != null) {
            message.prop_list = data.prop_list.map(item => dependency_7.PropPair.fromObject(item));
        }
        if (data.fight_prop_list != null) {
            message.fight_prop_list = data.fight_prop_list.map(item => dependency_5.FightPropPair.fromObject(item));
        }
        if (data.life_state != null) {
            message.life_state = data.life_state;
        }
        if (data.animator_para_list != null) {
            message.animator_para_list = data.animator_para_list.map(item => dependency_1.AnimatorParameterValueInfoPair.fromObject(item));
        }
        if (data.last_move_scene_time_ms != null) {
            message.last_move_scene_time_ms = data.last_move_scene_time_ms;
        }
        if (data.last_move_reliable_seq != null) {
            message.last_move_reliable_seq = data.last_move_reliable_seq;
        }
        if (data.entity_client_data != null) {
            message.entity_client_data = dependency_3.EntityClientData.fromObject(data.entity_client_data);
        }
        if (data.entity_environment_info_list != null) {
            message.entity_environment_info_list = data.entity_environment_info_list.map(item => dependency_4.EntityEnvironmentInfo.fromObject(item));
        }
        if (data.entity_authority_info != null) {
            message.entity_authority_info = dependency_2.EntityAuthorityInfo.fromObject(data.entity_authority_info);
        }
        if (data.tag_list != null) {
            message.tag_list = data.tag_list;
        }
        if (data.server_buff_list != null) {
            message.server_buff_list = data.server_buff_list.map(item => dependency_13.ServerBuff.fromObject(item));
        }
        if (data.avatar != null) {
            message.avatar = dependency_9.SceneAvatarInfo.fromObject(data.avatar);
        }
        if (data.monster != null) {
            message.monster = dependency_11.SceneMonsterInfo.fromObject(data.monster);
        }
        if (data.npc != null) {
            message.npc = dependency_12.SceneNpcInfo.fromObject(data.npc);
        }
        if (data.gadget != null) {
            message.gadget = dependency_10.SceneGadgetInfo.fromObject(data.gadget);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.entity_type != null) {
            data.entity_type = this.entity_type;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.motion_info != null) {
            data.motion_info = this.motion_info.toObject();
        }
        if (this.prop_list != null) {
            data.prop_list = this.prop_list.map((item) => item.toObject());
        }
        if (this.fight_prop_list != null) {
            data.fight_prop_list = this.fight_prop_list.map((item) => item.toObject());
        }
        if (this.life_state != null) {
            data.life_state = this.life_state;
        }
        if (this.animator_para_list != null) {
            data.animator_para_list = this.animator_para_list.map((item) => item.toObject());
        }
        if (this.last_move_scene_time_ms != null) {
            data.last_move_scene_time_ms = this.last_move_scene_time_ms;
        }
        if (this.last_move_reliable_seq != null) {
            data.last_move_reliable_seq = this.last_move_reliable_seq;
        }
        if (this.entity_client_data != null) {
            data.entity_client_data = this.entity_client_data.toObject();
        }
        if (this.entity_environment_info_list != null) {
            data.entity_environment_info_list = this.entity_environment_info_list.map((item) => item.toObject());
        }
        if (this.entity_authority_info != null) {
            data.entity_authority_info = this.entity_authority_info.toObject();
        }
        if (this.tag_list != null) {
            data.tag_list = this.tag_list;
        }
        if (this.server_buff_list != null) {
            data.server_buff_list = this.server_buff_list.map((item) => item.toObject());
        }
        if (this.avatar != null) {
            data.avatar = this.avatar.toObject();
        }
        if (this.monster != null) {
            data.monster = this.monster.toObject();
        }
        if (this.npc != null) {
            data.npc = this.npc.toObject();
        }
        if (this.gadget != null) {
            data.gadget = this.gadget.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_type != dependency_8.ProtEntityType.PROT_ENTITY_TYPE_NONE)
            writer.writeEnum(1, this.entity_type);
        if (this.entity_id != 0)
            writer.writeUint32(2, this.entity_id);
        if (this.name.length)
            writer.writeString(3, this.name);
        if (this.has_motion_info)
            writer.writeMessage(4, this.motion_info, () => this.motion_info.serialize(writer));
        if (this.prop_list.length)
            writer.writeRepeatedMessage(5, this.prop_list, (item) => item.serialize(writer));
        if (this.fight_prop_list.length)
            writer.writeRepeatedMessage(6, this.fight_prop_list, (item) => item.serialize(writer));
        if (this.life_state != 0)
            writer.writeUint32(7, this.life_state);
        if (this.animator_para_list.length)
            writer.writeRepeatedMessage(9, this.animator_para_list, (item) => item.serialize(writer));
        if (this.last_move_scene_time_ms != 0)
            writer.writeUint32(17, this.last_move_scene_time_ms);
        if (this.last_move_reliable_seq != 0)
            writer.writeUint32(18, this.last_move_reliable_seq);
        if (this.has_entity_client_data)
            writer.writeMessage(19, this.entity_client_data, () => this.entity_client_data.serialize(writer));
        if (this.entity_environment_info_list.length)
            writer.writeRepeatedMessage(20, this.entity_environment_info_list, (item) => item.serialize(writer));
        if (this.has_entity_authority_info)
            writer.writeMessage(21, this.entity_authority_info, () => this.entity_authority_info.serialize(writer));
        if (this.tag_list.length)
            writer.writeRepeatedString(22, this.tag_list);
        if (this.server_buff_list.length)
            writer.writeRepeatedMessage(23, this.server_buff_list, (item) => item.serialize(writer));
        if (this.has_avatar)
            writer.writeMessage(10, this.avatar, () => this.avatar.serialize(writer));
        if (this.has_monster)
            writer.writeMessage(11, this.monster, () => this.monster.serialize(writer));
        if (this.has_npc)
            writer.writeMessage(12, this.npc, () => this.npc.serialize(writer));
        if (this.has_gadget)
            writer.writeMessage(13, this.gadget, () => this.gadget.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneEntityInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_type = reader.readEnum();
                    break;
                case 2:
                    message.entity_id = reader.readUint32();
                    break;
                case 3:
                    message.name = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message.motion_info, () => message.motion_info = dependency_6.MotionInfo.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.prop_list, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_7.PropPair.deserialize(reader), dependency_7.PropPair));
                    break;
                case 6:
                    reader.readMessage(message.fight_prop_list, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_5.FightPropPair.deserialize(reader), dependency_5.FightPropPair));
                    break;
                case 7:
                    message.life_state = reader.readUint32();
                    break;
                case 9:
                    reader.readMessage(message.animator_para_list, () => pb_1.Message.addToRepeatedWrapperField(message, 9, dependency_1.AnimatorParameterValueInfoPair.deserialize(reader), dependency_1.AnimatorParameterValueInfoPair));
                    break;
                case 17:
                    message.last_move_scene_time_ms = reader.readUint32();
                    break;
                case 18:
                    message.last_move_reliable_seq = reader.readUint32();
                    break;
                case 19:
                    reader.readMessage(message.entity_client_data, () => message.entity_client_data = dependency_3.EntityClientData.deserialize(reader));
                    break;
                case 20:
                    reader.readMessage(message.entity_environment_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 20, dependency_4.EntityEnvironmentInfo.deserialize(reader), dependency_4.EntityEnvironmentInfo));
                    break;
                case 21:
                    reader.readMessage(message.entity_authority_info, () => message.entity_authority_info = dependency_2.EntityAuthorityInfo.deserialize(reader));
                    break;
                case 22:
                    pb_1.Message.addToRepeatedField(message, 22, reader.readString());
                    break;
                case 23:
                    reader.readMessage(message.server_buff_list, () => pb_1.Message.addToRepeatedWrapperField(message, 23, dependency_13.ServerBuff.deserialize(reader), dependency_13.ServerBuff));
                    break;
                case 10:
                    reader.readMessage(message.avatar, () => message.avatar = dependency_9.SceneAvatarInfo.deserialize(reader));
                    break;
                case 11:
                    reader.readMessage(message.monster, () => message.monster = dependency_11.SceneMonsterInfo.deserialize(reader));
                    break;
                case 12:
                    reader.readMessage(message.npc, () => message.npc = dependency_12.SceneNpcInfo.deserialize(reader));
                    break;
                case 13:
                    reader.readMessage(message.gadget, () => message.gadget = dependency_10.SceneGadgetInfo.deserialize(reader));
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
        return SceneEntityInfo.deserialize(bytes);
    }
}
exports.SceneEntityInfo = SceneEntityInfo;
_SceneEntityInfo_one_of_decls = new WeakMap();
