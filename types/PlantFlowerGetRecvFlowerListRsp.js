"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerGetRecvFlowerListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlantFlowerRecvFlowerData_1 = require("./PlantFlowerRecvFlowerData");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGetRecvFlowerListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerGetRecvFlowerListRsp", [
            { no: 15, name: "recv_flower_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlantFlowerRecvFlowerData_1.PlantFlowerRecvFlowerData },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { recvFlowerList: [], retcode: 0, scheduleId: 0 };
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
                case /* repeated PlantFlowerRecvFlowerData recv_flower_list */ 15:
                    message.recvFlowerList.push(PlantFlowerRecvFlowerData_1.PlantFlowerRecvFlowerData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 schedule_id */ 4:
                    message.scheduleId = reader.uint32();
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
        /* repeated PlantFlowerRecvFlowerData recv_flower_list = 15; */
        for (let i = 0; i < message.recvFlowerList.length; i++)
            PlantFlowerRecvFlowerData_1.PlantFlowerRecvFlowerData.internalBinaryWrite(message.recvFlowerList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 schedule_id = 4; */
        if (message.scheduleId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGetRecvFlowerListRsp
 */
exports.PlantFlowerGetRecvFlowerListRsp = new PlantFlowerGetRecvFlowerListRsp$Type();
