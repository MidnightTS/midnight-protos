"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneWeaponInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EntityRendererChangedInfo_1 = require("./EntityRendererChangedInfo");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class SceneWeaponInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneWeaponInfo", [
            { no: 1, name: "entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "guid", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "promote_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 8, name: "affix_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "renderer_changed_info", kind: "message", T: () => EntityRendererChangedInfo_1.EntityRendererChangedInfo }
        ]);
    }
    create(value) {
        const message = { affixMap: {} };
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
                case /* optional uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* optional uint32 gadget_id */ 2:
                    message.gadgetId = reader.uint32();
                    break;
                case /* optional uint32 item_id */ 3:
                    message.itemId = reader.uint32();
                    break;
                case /* optional uint64 guid */ 4:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 level */ 5:
                    message.level = reader.uint32();
                    break;
                case /* optional uint32 promote_level */ 6:
                    message.promoteLevel = reader.uint32();
                    break;
                case /* optional com.midnights.game.AbilitySyncStateInfo ability_info */ 7:
                    message.abilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.abilityInfo);
                    break;
                case /* map<uint32, uint32> affix_map */ 8:
                    this.binaryReadMap8(message.affixMap, reader, options);
                    break;
                case /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info */ 9:
                    message.rendererChangedInfo = EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryRead(reader, reader.uint32(), options, message.rendererChangedInfo);
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.SceneWeaponInfo.affix_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 entity_id = 1; */
        if (message.entityId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* optional uint32 gadget_id = 2; */
        if (message.gadgetId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.gadgetId);
        /* optional uint32 item_id = 3; */
        if (message.itemId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.itemId);
        /* optional uint64 guid = 4; */
        if (message.guid !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.guid);
        /* optional uint32 level = 5; */
        if (message.level !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.level);
        /* optional uint32 promote_level = 6; */
        if (message.promoteLevel !== undefined)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.promoteLevel);
        /* optional com.midnights.game.AbilitySyncStateInfo ability_info = 7; */
        if (message.abilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.abilityInfo, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<uint32, uint32> affix_map = 8; */
        for (let k of Object.keys(message.affixMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.affixMap[k]).join();
        /* optional com.midnights.game.EntityRendererChangedInfo renderer_changed_info = 9; */
        if (message.rendererChangedInfo)
            EntityRendererChangedInfo_1.EntityRendererChangedInfo.internalBinaryWrite(message.rendererChangedInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneWeaponInfo
 */
exports.SceneWeaponInfo = new SceneWeaponInfo$Type();
