"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpActivityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BonusOpActivityInfo_1 = require("./BonusOpActivityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("OpActivityInfo", [
            { no: 15, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_has_change", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "bonus_info", kind: "message", oneof: "detail", T: () => BonusOpActivityInfo_1.BonusOpActivityInfo }
        ]);
    }
    create(value) {
        const message = { activityId: 0, scheduleId: 0, endTime: 0, beginTime: 0, isHasChange: false, detail: { oneofKind: undefined } };
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
                case /* uint32 activity_id */ 15:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 14:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 end_time */ 4:
                    message.endTime = reader.uint32();
                    break;
                case /* uint32 begin_time */ 13:
                    message.beginTime = reader.uint32();
                    break;
                case /* bool is_has_change */ 7:
                    message.isHasChange = reader.bool();
                    break;
                case /* BonusOpActivityInfo bonus_info */ 6:
                    message.detail = {
                        oneofKind: "bonusInfo",
                        bonusInfo: BonusOpActivityInfo_1.BonusOpActivityInfo.internalBinaryRead(reader, reader.uint32(), options, message.detail.bonusInfo)
                    };
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
        /* uint32 activity_id = 15; */
        if (message.activityId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.activityId);
        /* uint32 schedule_id = 14; */
        if (message.scheduleId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 end_time = 4; */
        if (message.endTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.endTime);
        /* uint32 begin_time = 13; */
        if (message.beginTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* bool is_has_change = 7; */
        if (message.isHasChange !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isHasChange);
        /* BonusOpActivityInfo bonus_info = 6; */
        if (message.detail.oneofKind === "bonusInfo")
            BonusOpActivityInfo_1.BonusOpActivityInfo.internalBinaryWrite(message.detail.bonusInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OpActivityInfo
 */
exports.OpActivityInfo = new OpActivityInfo$Type();
