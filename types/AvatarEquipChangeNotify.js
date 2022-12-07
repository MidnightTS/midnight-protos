"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEquipChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneWeaponInfo_1 = require("./SceneWeaponInfo");
const SceneReliquaryInfo_1 = require("./SceneReliquaryInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarEquipChangeNotify", [
            { no: 7, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "equip_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "equip_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "item_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reliquary", kind: "message", T: () => SceneReliquaryInfo_1.SceneReliquaryInfo },
            { no: 15, name: "weapon", kind: "message", T: () => SceneWeaponInfo_1.SceneWeaponInfo }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, equipType: 0, equipGuid: 0n, itemId: 0 };
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
                case /* uint64 avatar_guid */ 7:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 equip_type */ 10:
                    message.equipType = reader.uint32();
                    break;
                case /* uint64 equip_guid */ 5:
                    message.equipGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 item_id */ 3:
                    message.itemId = reader.uint32();
                    break;
                case /* SceneReliquaryInfo reliquary */ 4:
                    message.reliquary = SceneReliquaryInfo_1.SceneReliquaryInfo.internalBinaryRead(reader, reader.uint32(), options, message.reliquary);
                    break;
                case /* SceneWeaponInfo weapon */ 15:
                    message.weapon = SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryRead(reader, reader.uint32(), options, message.weapon);
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
        /* uint64 avatar_guid = 7; */
        if (message.avatarGuid !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 equip_type = 10; */
        if (message.equipType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.equipType);
        /* uint64 equip_guid = 5; */
        if (message.equipGuid !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.equipGuid);
        /* uint32 item_id = 3; */
        if (message.itemId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.itemId);
        /* SceneReliquaryInfo reliquary = 4; */
        if (message.reliquary)
            SceneReliquaryInfo_1.SceneReliquaryInfo.internalBinaryWrite(message.reliquary, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* SceneWeaponInfo weapon = 15; */
        if (message.weapon)
            SceneWeaponInfo_1.SceneWeaponInfo.internalBinaryWrite(message.weapon, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEquipChangeNotify
 */
exports.AvatarEquipChangeNotify = new AvatarEquipChangeNotify$Type();
