"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusPlayerInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InBattleMechanicusBuildingInfo_1 = require("./InBattleMechanicusBuildingInfo");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPlayerInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusPlayerInfo", [
            { no: 13, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "is_card_confirmed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "building_points", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "building_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => InBattleMechanicusBuildingInfo_1.InBattleMechanicusBuildingInfo },
            { no: 15, name: "pick_card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, isCardConfirmed: false, buildingPoints: 0, buildingList: [], pickCardId: 0 };
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
                case /* uint32 uid */ 13:
                    message.uid = reader.uint32();
                    break;
                case /* bool is_card_confirmed */ 12:
                    message.isCardConfirmed = reader.bool();
                    break;
                case /* uint32 building_points */ 2:
                    message.buildingPoints = reader.uint32();
                    break;
                case /* repeated InBattleMechanicusBuildingInfo building_list */ 5:
                    message.buildingList.push(InBattleMechanicusBuildingInfo_1.InBattleMechanicusBuildingInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 pick_card_id */ 15:
                    message.pickCardId = reader.uint32();
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
        /* uint32 uid = 13; */
        if (message.uid !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.uid);
        /* bool is_card_confirmed = 12; */
        if (message.isCardConfirmed !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isCardConfirmed);
        /* uint32 building_points = 2; */
        if (message.buildingPoints !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.buildingPoints);
        /* repeated InBattleMechanicusBuildingInfo building_list = 5; */
        for (let i = 0; i < message.buildingList.length; i++)
            InBattleMechanicusBuildingInfo_1.InBattleMechanicusBuildingInfo.internalBinaryWrite(message.buildingList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 pick_card_id = 15; */
        if (message.pickCardId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.pickCardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusPlayerInfo
 */
exports.InBattleMechanicusPlayerInfo = new InBattleMechanicusPlayerInfo$Type();
