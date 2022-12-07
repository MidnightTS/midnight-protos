"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerAcceptGiveFlowerRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlantFlowerAcceptFlowerResultInfo_1 = require("./PlantFlowerAcceptFlowerResultInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerAcceptGiveFlowerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerAcceptGiveFlowerRsp", [
            { no: 3, name: "accept_flower_result_info", kind: "message", T: () => PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo },
            { no: 6, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, retcode: 0 };
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
                case /* PlantFlowerAcceptFlowerResultInfo accept_flower_result_info */ 3:
                    message.acceptFlowerResultInfo = PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo.internalBinaryRead(reader, reader.uint32(), options, message.acceptFlowerResultInfo);
                    break;
                case /* uint32 schedule_id */ 6:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
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
        /* PlantFlowerAcceptFlowerResultInfo accept_flower_result_info = 3; */
        if (message.acceptFlowerResultInfo)
            PlantFlowerAcceptFlowerResultInfo_1.PlantFlowerAcceptFlowerResultInfo.internalBinaryWrite(message.acceptFlowerResultInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 schedule_id = 6; */
        if (message.scheduleId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerAcceptGiveFlowerRsp
 */
exports.PlantFlowerAcceptGiveFlowerRsp = new PlantFlowerAcceptGiveFlowerRsp$Type();
