"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SignInData_1 = require("./SignInData");
// @generated message type with reflection information, may provide speed optimized methods
class SignInInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SignInInfo", [
            { no: 1, name: "is_cond_satisfied", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "signin_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SignInData_1.SignInData },
            { no: 5, name: "Unk3300_MNJELIDKMCF", kind: "scalar", jsonName: "Unk3300MNJELIDKMCF", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_NFNOKBNBLGE", kind: "scalar", jsonName: "Unk3300NFNOKBNBLGE", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "reward_day_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isCondSatisfied: false, signinDataList: [], unk3300MNJELIDKMCF: 0, scheduleId: 0, unk3300NFNOKBNBLGE: 0, rewardDayList: [], beginTime: 0, configId: 0, endTime: 0 };
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
                case /* bool is_cond_satisfied */ 1:
                    message.isCondSatisfied = reader.bool();
                    break;
                case /* repeated SignInData signin_data_list */ 10:
                    message.signinDataList.push(SignInData_1.SignInData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_MNJELIDKMCF = 5 [json_name = "Unk3300MNJELIDKMCF"];*/ 5:
                    message.unk3300MNJELIDKMCF = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 7:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 Unk3300_NFNOKBNBLGE = 3 [json_name = "Unk3300NFNOKBNBLGE"];*/ 3:
                    message.unk3300NFNOKBNBLGE = reader.uint32();
                    break;
                case /* repeated uint32 reward_day_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.rewardDayList.push(reader.uint32());
                    else
                        message.rewardDayList.push(reader.uint32());
                    break;
                case /* uint32 begin_time */ 6:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 config_id */ 9:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 end_time */ 8:
                    message.endTime = reader.uint32();
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
        /* bool is_cond_satisfied = 1; */
        if (message.isCondSatisfied !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isCondSatisfied);
        /* repeated SignInData signin_data_list = 10; */
        for (let i = 0; i < message.signinDataList.length; i++)
            SignInData_1.SignInData.internalBinaryWrite(message.signinDataList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_MNJELIDKMCF = 5 [json_name = "Unk3300MNJELIDKMCF"]; */
        if (message.unk3300MNJELIDKMCF !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300MNJELIDKMCF);
        /* uint32 schedule_id = 7; */
        if (message.scheduleId !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* uint32 Unk3300_NFNOKBNBLGE = 3 [json_name = "Unk3300NFNOKBNBLGE"]; */
        if (message.unk3300NFNOKBNBLGE !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.unk3300NFNOKBNBLGE);
        /* repeated uint32 reward_day_list = 4; */
        if (message.rewardDayList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.rewardDayList.length; i++)
                writer.uint32(message.rewardDayList[i]);
            writer.join();
        }
        /* uint32 begin_time = 6; */
        if (message.beginTime !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.beginTime);
        /* uint32 config_id = 9; */
        if (message.configId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.configId);
        /* uint32 end_time = 8; */
        if (message.endTime !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SignInInfo
 */
exports.SignInInfo = new SignInInfo$Type();
