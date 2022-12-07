"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalLineAllDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LockedPersonallineData_1 = require("./LockedPersonallineData");
// @generated message type with reflection information, may provide speed optimized methods
class PersonalLineAllDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PersonalLineAllDataRsp", [
            { no: 12, name: "cur_finished_daily_task_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "locked_personal_line_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LockedPersonallineData_1.LockedPersonallineData },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "Unk3300_BHLEGLEICFJ", kind: "scalar", jsonName: "Unk3300BHLEGLEICFJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_BGCIGNEGBIN", kind: "scalar", jsonName: "Unk3300BGCIGNEGBIN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "legendary_key_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curFinishedDailyTaskCount: 0, lockedPersonalLineList: [], retcode: 0, unk3300BHLEGLEICFJ: [], unk3300BGCIGNEGBIN: [], legendaryKeyCount: 0 };
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
                case /* uint32 cur_finished_daily_task_count */ 12:
                    message.curFinishedDailyTaskCount = reader.uint32();
                    break;
                case /* repeated LockedPersonallineData locked_personal_line_list */ 10:
                    message.lockedPersonalLineList.push(LockedPersonallineData_1.LockedPersonallineData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 Unk3300_BHLEGLEICFJ = 1 [json_name = "Unk3300BHLEGLEICFJ"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BHLEGLEICFJ.push(reader.uint32());
                    else
                        message.unk3300BHLEGLEICFJ.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_BGCIGNEGBIN = 6 [json_name = "Unk3300BGCIGNEGBIN"];*/ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BGCIGNEGBIN.push(reader.uint32());
                    else
                        message.unk3300BGCIGNEGBIN.push(reader.uint32());
                    break;
                case /* uint32 legendary_key_count */ 5:
                    message.legendaryKeyCount = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 cur_finished_daily_task_count = 12; */
        if (message.curFinishedDailyTaskCount !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.curFinishedDailyTaskCount);
        /* repeated LockedPersonallineData locked_personal_line_list = 10; */
        for (let i = 0; i < message.lockedPersonalLineList.length; i++)
            LockedPersonallineData_1.LockedPersonallineData.internalBinaryWrite(message.lockedPersonalLineList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 Unk3300_BHLEGLEICFJ = 1 [json_name = "Unk3300BHLEGLEICFJ"]; */
        if (message.unk3300BHLEGLEICFJ.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BHLEGLEICFJ.length; i++)
                writer.uint32(message.unk3300BHLEGLEICFJ[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_BGCIGNEGBIN = 6 [json_name = "Unk3300BGCIGNEGBIN"]; */
        if (message.unk3300BGCIGNEGBIN.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BGCIGNEGBIN.length; i++)
                writer.uint32(message.unk3300BGCIGNEGBIN[i]);
            writer.join();
        }
        /* uint32 legendary_key_count = 5; */
        if (message.legendaryKeyCount !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.legendaryKeyCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PersonalLineAllDataRsp
 */
exports.PersonalLineAllDataRsp = new PersonalLineAllDataRsp$Type();
