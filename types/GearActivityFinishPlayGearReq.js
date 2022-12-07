"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GearActivityFinishPlayGearReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GearColumnInfo_1 = require("./GearColumnInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GearActivityFinishPlayGearReq$Type extends runtime_5.MessageType {
    constructor() {
        super("GearActivityFinishPlayGearReq", [
            { no: 10, name: "use_clue", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "gear_column_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GearColumnInfo_1.GearColumnInfo }
        ]);
    }
    create(value) {
        const message = { useClue: false, levelId: 0, isSuccess: false, gearColumnInfoList: [] };
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
                case /* bool use_clue */ 10:
                    message.useClue = reader.bool();
                    break;
                case /* uint32 level_id */ 3:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_success */ 8:
                    message.isSuccess = reader.bool();
                    break;
                case /* repeated GearColumnInfo gear_column_info_list */ 12:
                    message.gearColumnInfoList.push(GearColumnInfo_1.GearColumnInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* bool use_clue = 10; */
        if (message.useClue !== false)
            writer.tag(10, runtime_1.WireType.Varint).bool(message.useClue);
        /* uint32 level_id = 3; */
        if (message.levelId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool is_success = 8; */
        if (message.isSuccess !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isSuccess);
        /* repeated GearColumnInfo gear_column_info_list = 12; */
        for (let i = 0; i < message.gearColumnInfoList.length; i++)
            GearColumnInfo_1.GearColumnInfo.internalBinaryWrite(message.gearColumnInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GearActivityFinishPlayGearReq
 */
exports.GearActivityFinishPlayGearReq = new GearActivityFinishPlayGearReq$Type();
