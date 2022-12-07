"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetActivityInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ActivityInfo_1 = require("./ActivityInfo");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class GetActivityInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetActivityInfoRsp", [
            { no: 10, name: "disable_transfer_point_interaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ActivityInfo_1.ActivityInfo },
            { no: 1, name: "activated_sale_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { disableTransferPointInteractionList: [], retcode: 0, activityInfoList: [], activatedSaleIdList: [] };
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
                case /* repeated Uint32Pair disable_transfer_point_interaction_list */ 10:
                    message.disableTransferPointInteractionList.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ActivityInfo activity_info_list */ 2:
                    message.activityInfoList.push(ActivityInfo_1.ActivityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 activated_sale_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activatedSaleIdList.push(reader.uint32());
                    else
                        message.activatedSaleIdList.push(reader.uint32());
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
        /* repeated Uint32Pair disable_transfer_point_interaction_list = 10; */
        for (let i = 0; i < message.disableTransferPointInteractionList.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.disableTransferPointInteractionList[i], writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated ActivityInfo activity_info_list = 2; */
        for (let i = 0; i < message.activityInfoList.length; i++)
            ActivityInfo_1.ActivityInfo.internalBinaryWrite(message.activityInfoList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 activated_sale_id_list = 1; */
        if (message.activatedSaleIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activatedSaleIdList.length; i++)
                writer.uint32(message.activatedSaleIdList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetActivityInfoRsp
 */
exports.GetActivityInfoRsp = new GetActivityInfoRsp$Type();
