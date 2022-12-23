"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerAcceptAllGiveFlowerRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlantFlowerAcceptFlowerResultInfo_1 = require("./PlantFlowerAcceptFlowerResultInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerAcceptAllGiveFlowerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerAcceptAllGiveFlowerRsp", [
            { no: 12, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "accept_flower_result_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, retcode: 0, acceptFlowerResultInfoList: [] };
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
                case /* uint32 schedule_id */ 12:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated PlantFlowerAcceptFlowerResultInfo accept_flower_result_info_list */ 13:
                    message.acceptFlowerResultInfoList.push(PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 schedule_id = 12; */
        if (message.scheduleId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated PlantFlowerAcceptFlowerResultInfo accept_flower_result_info_list = 13; */
        for (let i = 0; i < message.acceptFlowerResultInfoList.length; i++)
            PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo.internalBinaryWrite(message.acceptFlowerResultInfoList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerAcceptAllGiveFlowerRsp
 */
exports.PlantFlowerAcceptAllGiveFlowerRsp = new PlantFlowerAcceptAllGiveFlowerRsp$Type();
