"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCondStateChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityCondStateChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ActivityCondStateChangeNotify", [
            { no: 5, name: "activity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_HKKNIHNBHAE", kind: "scalar", jsonName: "Unk3300HKKNIHNBHAE", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_BGNIBLKCPCA", kind: "scalar", jsonName: "Unk3300BGNIBLKCPCA", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "activated_sale_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "disable_transfer_point_interaction_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { activityId: 0, scheduleId: 0, unk3300HKKNIHNBHAE: [], unk3300BGNIBLKCPCA: [], activatedSaleIdList: [], disableTransferPointInteractionList: [] };
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
                case /* uint32 activity_id */ 5:
                    message.activityId = reader.uint32();
                    break;
                case /* uint32 schedule_id */ 14:
                    message.scheduleId = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HKKNIHNBHAE = 1 [json_name = "Unk3300HKKNIHNBHAE"];*/ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HKKNIHNBHAE.push(reader.uint32());
                    else
                        message.unk3300HKKNIHNBHAE.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_BGNIBLKCPCA = 4 [json_name = "Unk3300BGNIBLKCPCA"];*/ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BGNIBLKCPCA.push(reader.uint32());
                    else
                        message.unk3300BGNIBLKCPCA.push(reader.uint32());
                    break;
                case /* repeated uint32 activated_sale_id_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.activatedSaleIdList.push(reader.uint32());
                    else
                        message.activatedSaleIdList.push(reader.uint32());
                    break;
                case /* repeated Uint32Pair disable_transfer_point_interaction_list */ 11:
                    message.disableTransferPointInteractionList.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 activity_id = 5; */
        if (message.activityId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.activityId);
        /* uint32 schedule_id = 14; */
        if (message.scheduleId !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* repeated uint32 Unk3300_HKKNIHNBHAE = 1 [json_name = "Unk3300HKKNIHNBHAE"]; */
        if (message.unk3300HKKNIHNBHAE.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HKKNIHNBHAE.length; i++)
                writer.uint32(message.unk3300HKKNIHNBHAE[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_BGNIBLKCPCA = 4 [json_name = "Unk3300BGNIBLKCPCA"]; */
        if (message.unk3300BGNIBLKCPCA.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BGNIBLKCPCA.length; i++)
                writer.uint32(message.unk3300BGNIBLKCPCA[i]);
            writer.join();
        }
        /* repeated uint32 activated_sale_id_list = 8; */
        if (message.activatedSaleIdList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.activatedSaleIdList.length; i++)
                writer.uint32(message.activatedSaleIdList[i]);
            writer.join();
        }
        /* repeated Uint32Pair disable_transfer_point_interaction_list = 11; */
        for (let i = 0; i < message.disableTransferPointInteractionList.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.disableTransferPointInteractionList[i], writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityCondStateChangeNotify
 */
exports.ActivityCondStateChangeNotify = new ActivityCondStateChangeNotify$Type();
