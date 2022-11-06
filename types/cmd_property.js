"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkNewNotify = exports.AvatarPropNotify = exports.PlayerPropChangeReasonNotify = exports.AvatarPropChangeReasonNotify = exports.AvatarLifeStateChangeNotify = exports.EntityFightPropChangeReasonNotify = exports.AvatarFightPropUpdateNotify = exports.AvatarFightPropNotify = exports.EntityFightPropUpdateNotify = exports.EntityFightPropNotify = exports.LifeStateChangeNotify = exports.EntityPropNotify = exports.MarkNewType = exports.ChangeEnergyReason = exports.PropChangeReason = exports.MarkNewNotify_CmdId = exports.AvatarPropNotify_CmdId = exports.PlayerPropChangeReasonNotify_CmdId = exports.AvatarPropChangeReasonNotify_CmdId = exports.AvatarLifeStateChangeNotify_CmdId = exports.EntityFightPropChangeReasonNotify_CmdId = exports.AvatarFightPropUpdateNotify_CmdId = exports.AvatarFightPropNotify_CmdId = exports.EntityFightPropUpdateNotify_CmdId = exports.EntityFightPropNotify_CmdId = exports.LifeStateChangeNotify_CmdId = exports.EntityPropNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
const define_2 = require("./define");
const define_3 = require("./define");
const define_4 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.EntityPropNotify.CmdId
 */
var EntityPropNotify_CmdId;
(function (EntityPropNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityPropNotify_CmdId[EntityPropNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1272;
     */
    EntityPropNotify_CmdId[EntityPropNotify_CmdId["CMD_ID"] = 1272] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityPropNotify_CmdId[EntityPropNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityPropNotify_CmdId[EntityPropNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityPropNotify_CmdId = exports.EntityPropNotify_CmdId || (exports.EntityPropNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.LifeStateChangeNotify.CmdId
 */
var LifeStateChangeNotify_CmdId;
(function (LifeStateChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LifeStateChangeNotify_CmdId[LifeStateChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1298;
     */
    LifeStateChangeNotify_CmdId[LifeStateChangeNotify_CmdId["CMD_ID"] = 1298] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    LifeStateChangeNotify_CmdId[LifeStateChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    LifeStateChangeNotify_CmdId[LifeStateChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(LifeStateChangeNotify_CmdId = exports.LifeStateChangeNotify_CmdId || (exports.LifeStateChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityFightPropNotify.CmdId
 */
var EntityFightPropNotify_CmdId;
(function (EntityFightPropNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropNotify_CmdId[EntityFightPropNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1212;
     */
    EntityFightPropNotify_CmdId[EntityFightPropNotify_CmdId["CMD_ID"] = 1212] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropNotify_CmdId[EntityFightPropNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityFightPropNotify_CmdId[EntityFightPropNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityFightPropNotify_CmdId = exports.EntityFightPropNotify_CmdId || (exports.EntityFightPropNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityFightPropUpdateNotify.CmdId
 */
var EntityFightPropUpdateNotify_CmdId;
(function (EntityFightPropUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropUpdateNotify_CmdId[EntityFightPropUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1235;
     */
    EntityFightPropUpdateNotify_CmdId[EntityFightPropUpdateNotify_CmdId["CMD_ID"] = 1235] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropUpdateNotify_CmdId[EntityFightPropUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityFightPropUpdateNotify_CmdId[EntityFightPropUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityFightPropUpdateNotify_CmdId = exports.EntityFightPropUpdateNotify_CmdId || (exports.EntityFightPropUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFightPropNotify.CmdId
 */
var AvatarFightPropNotify_CmdId;
(function (AvatarFightPropNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFightPropNotify_CmdId[AvatarFightPropNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1207;
     */
    AvatarFightPropNotify_CmdId[AvatarFightPropNotify_CmdId["CMD_ID"] = 1207] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFightPropNotify_CmdId[AvatarFightPropNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFightPropNotify_CmdId[AvatarFightPropNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFightPropNotify_CmdId = exports.AvatarFightPropNotify_CmdId || (exports.AvatarFightPropNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarFightPropUpdateNotify.CmdId
 */
var AvatarFightPropUpdateNotify_CmdId;
(function (AvatarFightPropUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFightPropUpdateNotify_CmdId[AvatarFightPropUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1221;
     */
    AvatarFightPropUpdateNotify_CmdId[AvatarFightPropUpdateNotify_CmdId["CMD_ID"] = 1221] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarFightPropUpdateNotify_CmdId[AvatarFightPropUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarFightPropUpdateNotify_CmdId[AvatarFightPropUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarFightPropUpdateNotify_CmdId = exports.AvatarFightPropUpdateNotify_CmdId || (exports.AvatarFightPropUpdateNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.EntityFightPropChangeReasonNotify.CmdId
 */
var EntityFightPropChangeReasonNotify_CmdId;
(function (EntityFightPropChangeReasonNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropChangeReasonNotify_CmdId[EntityFightPropChangeReasonNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1203;
     */
    EntityFightPropChangeReasonNotify_CmdId[EntityFightPropChangeReasonNotify_CmdId["CMD_ID"] = 1203] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    EntityFightPropChangeReasonNotify_CmdId[EntityFightPropChangeReasonNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    EntityFightPropChangeReasonNotify_CmdId[EntityFightPropChangeReasonNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(EntityFightPropChangeReasonNotify_CmdId = exports.EntityFightPropChangeReasonNotify_CmdId || (exports.EntityFightPropChangeReasonNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarLifeStateChangeNotify.CmdId
 */
var AvatarLifeStateChangeNotify_CmdId;
(function (AvatarLifeStateChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarLifeStateChangeNotify_CmdId[AvatarLifeStateChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1290;
     */
    AvatarLifeStateChangeNotify_CmdId[AvatarLifeStateChangeNotify_CmdId["CMD_ID"] = 1290] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarLifeStateChangeNotify_CmdId[AvatarLifeStateChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarLifeStateChangeNotify_CmdId[AvatarLifeStateChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarLifeStateChangeNotify_CmdId = exports.AvatarLifeStateChangeNotify_CmdId || (exports.AvatarLifeStateChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPropChangeReasonNotify.CmdId
 */
var AvatarPropChangeReasonNotify_CmdId;
(function (AvatarPropChangeReasonNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPropChangeReasonNotify_CmdId[AvatarPropChangeReasonNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1273;
     */
    AvatarPropChangeReasonNotify_CmdId[AvatarPropChangeReasonNotify_CmdId["CMD_ID"] = 1273] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPropChangeReasonNotify_CmdId[AvatarPropChangeReasonNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPropChangeReasonNotify_CmdId[AvatarPropChangeReasonNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarPropChangeReasonNotify_CmdId = exports.AvatarPropChangeReasonNotify_CmdId || (exports.AvatarPropChangeReasonNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerPropChangeReasonNotify.CmdId
 */
var PlayerPropChangeReasonNotify_CmdId;
(function (PlayerPropChangeReasonNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropChangeReasonNotify_CmdId[PlayerPropChangeReasonNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1299;
     */
    PlayerPropChangeReasonNotify_CmdId[PlayerPropChangeReasonNotify_CmdId["CMD_ID"] = 1299] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerPropChangeReasonNotify_CmdId[PlayerPropChangeReasonNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerPropChangeReasonNotify_CmdId[PlayerPropChangeReasonNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerPropChangeReasonNotify_CmdId = exports.PlayerPropChangeReasonNotify_CmdId || (exports.PlayerPropChangeReasonNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.AvatarPropNotify.CmdId
 */
var AvatarPropNotify_CmdId;
(function (AvatarPropNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPropNotify_CmdId[AvatarPropNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1231;
     */
    AvatarPropNotify_CmdId[AvatarPropNotify_CmdId["CMD_ID"] = 1231] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AvatarPropNotify_CmdId[AvatarPropNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AvatarPropNotify_CmdId[AvatarPropNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AvatarPropNotify_CmdId = exports.AvatarPropNotify_CmdId || (exports.AvatarPropNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkNewNotify.CmdId
 */
var MarkNewNotify_CmdId;
(function (MarkNewNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkNewNotify_CmdId[MarkNewNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 1275;
     */
    MarkNewNotify_CmdId[MarkNewNotify_CmdId["CMD_ID"] = 1275] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    MarkNewNotify_CmdId[MarkNewNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    MarkNewNotify_CmdId[MarkNewNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(MarkNewNotify_CmdId = exports.MarkNewNotify_CmdId || (exports.MarkNewNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PropChangeReason
 */
var PropChangeReason;
(function (PropChangeReason) {
    /**
     * @generated from protobuf enum value: PROP_CHANGE_NONE = 0;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_NONE"] = 0] = "PROP_CHANGE_NONE";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_STATUE_RECOVER = 1;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_STATUE_RECOVER"] = 1] = "PROP_CHANGE_STATUE_RECOVER";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_ENERGY_BALL = 2;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_ENERGY_BALL"] = 2] = "PROP_CHANGE_ENERGY_BALL";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_ABILITY = 3;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_ABILITY"] = 3] = "PROP_CHANGE_ABILITY";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_LEVELUP = 4;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_LEVELUP"] = 4] = "PROP_CHANGE_LEVELUP";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_ITEM = 5;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_ITEM"] = 5] = "PROP_CHANGE_ITEM";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_AVATAR_CARD = 6;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_AVATAR_CARD"] = 6] = "PROP_CHANGE_AVATAR_CARD";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_CITY_LEVELUP = 7;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_CITY_LEVELUP"] = 7] = "PROP_CHANGE_CITY_LEVELUP";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_AVATAR_UPGRADE = 8;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_AVATAR_UPGRADE"] = 8] = "PROP_CHANGE_AVATAR_UPGRADE";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_AVATAR_PROMOTE = 9;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_AVATAR_PROMOTE"] = 9] = "PROP_CHANGE_AVATAR_PROMOTE";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_PLAYER_ADD_EXP = 10;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_PLAYER_ADD_EXP"] = 10] = "PROP_CHANGE_PLAYER_ADD_EXP";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_FINISH_QUEST = 11;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_FINISH_QUEST"] = 11] = "PROP_CHANGE_FINISH_QUEST";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_GM = 12;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_GM"] = 12] = "PROP_CHANGE_GM";
    /**
     * @generated from protobuf enum value: PROP_CHANGE_MANUAL_ADJUST_WORLD_LEVEL = 13;
     */
    PropChangeReason[PropChangeReason["PROP_CHANGE_MANUAL_ADJUST_WORLD_LEVEL"] = 13] = "PROP_CHANGE_MANUAL_ADJUST_WORLD_LEVEL";
})(PropChangeReason = exports.PropChangeReason || (exports.PropChangeReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.ChangeEnergyReason
 */
var ChangeEnergyReason;
(function (ChangeEnergyReason) {
    /**
     * @generated from protobuf enum value: CHANGE_ENERGY_NONE = 0;
     */
    ChangeEnergyReason[ChangeEnergyReason["CHANGE_ENERGY_NONE"] = 0] = "CHANGE_ENERGY_NONE";
    /**
     * @generated from protobuf enum value: CHANGE_ENERGY_SKILL_START = 1;
     */
    ChangeEnergyReason[ChangeEnergyReason["CHANGE_ENERGY_SKILL_START"] = 1] = "CHANGE_ENERGY_SKILL_START";
})(ChangeEnergyReason = exports.ChangeEnergyReason || (exports.ChangeEnergyReason = {}));
/**
 * @generated from protobuf enum com.midnights.game.MarkNewType
 */
var MarkNewType;
(function (MarkNewType) {
    /**
     * @generated from protobuf enum value: MARK_NEW_TYPE_NONE = 0;
     */
    MarkNewType[MarkNewType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: MARK_NEW_TYPE_COMBINE = 1;
     */
    MarkNewType[MarkNewType["COMBINE"] = 1] = "COMBINE";
    /**
     * @generated from protobuf enum value: MARK_NEW_TYPE_FORGE = 2;
     */
    MarkNewType[MarkNewType["FORGE"] = 2] = "FORGE";
})(MarkNewType = exports.MarkNewType || (exports.MarkNewType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class EntityPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityPropNotify", [
            { no: 1, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => define_4.PropValue } },
            { no: 14, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { propMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, com.midnights.game.PropValue> prop_map */ 1:
                    this.binaryReadMap1(message.propMap, reader, options);
                    break;
                case /* optional uint32 entity_id */ 14:
                    message.entityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = define_4.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EntityPropNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? define_4.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.PropValue> prop_map = 1; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            define_4.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        /* optional uint32 entity_id = 14; */
        if (message.entityId !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityPropNotify
 */
exports.EntityPropNotify = new EntityPropNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LifeStateChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.LifeStateChangeNotify", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_3.ServerBuff },
            { no: 7, name: "attack_tag", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "move_reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "die_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieType", define_2.PlayerDieType] },
            { no: 5, name: "life_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { serverBuffList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 6:
                    message.serverBuffList.push(define_3.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string attack_tag */ 7:
                    message.attackTag = reader.string();
                    break;
                case /* optional uint32 move_reliable_seq */ 15:
                    message.moveReliableSeq = reader.uint32();
                    break;
                case /* optional com.midnights.game.PlayerDieType die_type */ 14:
                    message.dieType = reader.int32();
                    break;
                case /* optional uint32 life_state */ 5:
                    message.lifeState = reader.uint32();
                    break;
                case /* optional uint32 source_entity_id */ 1:
                    message.sourceEntityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* repeated com.midnights.game.ServerBuff server_buff_list = 6; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            define_3.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string attack_tag = 7; */
        if (message.attackTag !== undefined)
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.attackTag);
        /* optional uint32 move_reliable_seq = 15; */
        if (message.moveReliableSeq !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.moveReliableSeq);
        /* optional com.midnights.game.PlayerDieType die_type = 14; */
        if (message.dieType !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.dieType);
        /* optional uint32 life_state = 5; */
        if (message.lifeState !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.lifeState);
        /* optional uint32 source_entity_id = 1; */
        if (message.sourceEntityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.sourceEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.LifeStateChangeNotify
 */
exports.LifeStateChangeNotify = new LifeStateChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityFightPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityFightPropNotify", [
            { no: 4, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } }
        ]);
    }
    create(value) {
        const message = { fightPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* map<uint32, float> fight_prop_map */ 8:
                    this.binaryReadMap8(message.fightPropMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EntityFightPropNotify.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 4; */
        if (message.entityId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* map<uint32, float> fight_prop_map = 8; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.fightPropMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityFightPropNotify
 */
exports.EntityFightPropNotify = new EntityFightPropNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityFightPropUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityFightPropUpdateNotify", [
            { no: 15, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 13, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fightPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, float> fight_prop_map */ 15:
                    this.binaryReadMap15(message.fightPropMap, reader, options);
                    break;
                case /* optional uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.EntityFightPropUpdateNotify.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, float> fight_prop_map = 15; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional uint32 entity_id = 13; */
        if (message.entityId !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityFightPropUpdateNotify
 */
exports.EntityFightPropUpdateNotify = new EntityFightPropUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFightPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFightPropNotify", [
            { no: 8, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 4, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { fightPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, float> fight_prop_map */ 8:
                    this.binaryReadMap8(message.fightPropMap, reader, options);
                    break;
                case /* optional uint64 avatar_guid */ 4:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarFightPropNotify.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, float> fight_prop_map = 8; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional uint64 avatar_guid = 4; */
        if (message.avatarGuid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFightPropNotify
 */
exports.AvatarFightPropNotify = new AvatarFightPropNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarFightPropUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarFightPropUpdateNotify", [
            { no: 15, name: "fight_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 2 /*ScalarType.FLOAT*/ } },
            { no: 13, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { fightPropMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, float> fight_prop_map */ 15:
                    this.binaryReadMap15(message.fightPropMap, reader, options);
                    break;
                case /* optional uint64 avatar_guid */ 13:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.float();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarFightPropUpdateNotify.fight_prop_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, float> fight_prop_map = 15; */
        for (let k of Object.keys(message.fightPropMap))
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Bit32).float(message.fightPropMap[k]).join();
        /* optional uint64 avatar_guid = 13; */
        if (message.avatarGuid !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarFightPropUpdateNotify
 */
exports.AvatarFightPropUpdateNotify = new AvatarFightPropUpdateNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EntityFightPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.EntityFightPropChangeReasonNotify", [
            { no: 10, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "prop_delta", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 14, name: "change_hp_reason", kind: "enum", opt: true, T: () => ["com.midnights.game.ChangHpReason", define_1.ChangHpReason] },
            { no: 6, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PropChangeReason", PropChangeReason] },
            { no: 5, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "change_energy_reson", kind: "enum", opt: true, T: () => ["com.midnights.game.ChangeEnergyReason", ChangeEnergyReason] },
            { no: 13, name: "prop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { paramList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 param_list */ 10:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* optional float prop_delta */ 1:
                    message.propDelta = reader.float();
                    break;
                case /* optional com.midnights.game.ChangHpReason change_hp_reason */ 14:
                    message.changeHpReason = reader.int32();
                    break;
                case /* optional com.midnights.game.PropChangeReason reason */ 6:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 entity_id */ 5:
                    message.entityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.ChangeEnergyReason change_energy_reson */ 15:
                    message.changeEnergyReson = reader.int32();
                    break;
                case /* optional uint32 prop_type */ 13:
                    message.propType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 param_list = 10; */
        if (message.paramList.length) {
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* optional float prop_delta = 1; */
        if (message.propDelta !== undefined)
            writer.tag(1, runtime_1.WireType.Bit32).float(message.propDelta);
        /* optional com.midnights.game.ChangHpReason change_hp_reason = 14; */
        if (message.changeHpReason !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.changeHpReason);
        /* optional com.midnights.game.PropChangeReason reason = 6; */
        if (message.reason !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 entity_id = 5; */
        if (message.entityId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional com.midnights.game.ChangeEnergyReason change_energy_reson = 15; */
        if (message.changeEnergyReson !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.changeEnergyReson);
        /* optional uint32 prop_type = 13; */
        if (message.propType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.propType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.EntityFightPropChangeReasonNotify
 */
exports.EntityFightPropChangeReasonNotify = new EntityFightPropChangeReasonNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarLifeStateChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarLifeStateChangeNotify", [
            { no: 13, name: "life_state", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "attack_tag", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "die_type", kind: "enum", opt: true, T: () => ["com.midnights.game.PlayerDieType", define_2.PlayerDieType] },
            { no: 12, name: "server_buff_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => define_3.ServerBuff },
            { no: 5, name: "move_reliable_seq", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "source_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { serverBuffList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 life_state */ 13:
                    message.lifeState = reader.uint32();
                    break;
                case /* optional string attack_tag */ 10:
                    message.attackTag = reader.string();
                    break;
                case /* optional com.midnights.game.PlayerDieType die_type */ 2:
                    message.dieType = reader.int32();
                    break;
                case /* repeated com.midnights.game.ServerBuff server_buff_list */ 12:
                    message.serverBuffList.push(define_3.ServerBuff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 move_reliable_seq */ 5:
                    message.moveReliableSeq = reader.uint32();
                    break;
                case /* optional uint32 source_entity_id */ 3:
                    message.sourceEntityId = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 11:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 life_state = 13; */
        if (message.lifeState !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.lifeState);
        /* optional string attack_tag = 10; */
        if (message.attackTag !== undefined)
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.attackTag);
        /* optional com.midnights.game.PlayerDieType die_type = 2; */
        if (message.dieType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.dieType);
        /* repeated com.midnights.game.ServerBuff server_buff_list = 12; */
        for (let i = 0; i < message.serverBuffList.length; i++)
            define_3.ServerBuff.internalBinaryWrite(message.serverBuffList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 move_reliable_seq = 5; */
        if (message.moveReliableSeq !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.moveReliableSeq);
        /* optional uint32 source_entity_id = 3; */
        if (message.sourceEntityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sourceEntityId);
        /* optional uint64 avatar_guid = 11; */
        if (message.avatarGuid !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarLifeStateChangeNotify
 */
exports.AvatarLifeStateChangeNotify = new AvatarLifeStateChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPropChangeReasonNotify", [
            { no: 11, name: "old_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 5, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PropChangeReason", PropChangeReason] },
            { no: 1, name: "prop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "cur_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional float old_value */ 11:
                    message.oldValue = reader.float();
                    break;
                case /* optional com.midnights.game.PropChangeReason reason */ 5:
                    message.reason = reader.int32();
                    break;
                case /* optional uint32 prop_type */ 1:
                    message.propType = reader.uint32();
                    break;
                case /* optional uint64 avatar_guid */ 8:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* optional float cur_value */ 15:
                    message.curValue = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional float old_value = 11; */
        if (message.oldValue !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.oldValue);
        /* optional com.midnights.game.PropChangeReason reason = 5; */
        if (message.reason !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.reason);
        /* optional uint32 prop_type = 1; */
        if (message.propType !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.propType);
        /* optional uint64 avatar_guid = 8; */
        if (message.avatarGuid !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* optional float cur_value = 15; */
        if (message.curValue !== undefined)
            writer.tag(15, runtime_1.WireType.Bit32).float(message.curValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarPropChangeReasonNotify
 */
exports.AvatarPropChangeReasonNotify = new AvatarPropChangeReasonNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerPropChangeReasonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerPropChangeReasonNotify", [
            { no: 6, name: "prop_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "old_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 1, name: "reason", kind: "enum", opt: true, T: () => ["com.midnights.game.PropChangeReason", PropChangeReason] },
            { no: 11, name: "cur_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 prop_type */ 6:
                    message.propType = reader.uint32();
                    break;
                case /* optional float old_value */ 12:
                    message.oldValue = reader.float();
                    break;
                case /* optional com.midnights.game.PropChangeReason reason */ 1:
                    message.reason = reader.int32();
                    break;
                case /* optional float cur_value */ 11:
                    message.curValue = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 prop_type = 6; */
        if (message.propType !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.propType);
        /* optional float old_value = 12; */
        if (message.oldValue !== undefined)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.oldValue);
        /* optional com.midnights.game.PropChangeReason reason = 1; */
        if (message.reason !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.reason);
        /* optional float cur_value = 11; */
        if (message.curValue !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.curValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerPropChangeReasonNotify
 */
exports.PlayerPropChangeReasonNotify = new PlayerPropChangeReasonNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarPropNotify", [
            { no: 14, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ } },
            { no: 15, name: "avatar_guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { propMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, int64> prop_map */ 14:
                    this.binaryReadMap14(message.propMap, reader, options);
                    break;
                case /* optional uint64 avatar_guid */ 15:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int64().toBigInt();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AvatarPropNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? 0n;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, int64> prop_map = 14; */
        for (let k of Object.keys(message.propMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int64(message.propMap[k]).join();
        /* optional uint64 avatar_guid = 15; */
        if (message.avatarGuid !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarPropNotify
 */
exports.AvatarPropNotify = new AvatarPropNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MarkNewNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.MarkNewNotify", [
            { no: 7, name: "id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "mark_new_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { idList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 id_list */ 7:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.idList.push(reader.uint32());
                    else
                        message.idList.push(reader.uint32());
                    break;
                case /* optional uint32 mark_new_type */ 11:
                    message.markNewType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 id_list = 7; */
        if (message.idList.length) {
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.idList.length; i++)
                writer.uint32(message.idList[i]);
            writer.join();
        }
        /* optional uint32 mark_new_type = 11; */
        if (message.markNewType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.markNewType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.MarkNewNotify
 */
exports.MarkNewNotify = new MarkNewNotify$Type();
