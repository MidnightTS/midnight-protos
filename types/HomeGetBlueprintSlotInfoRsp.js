"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeGetBlueprintSlotInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeBlueprintSlotInfo_1 = require("./HomeBlueprintSlotInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetBlueprintSlotInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeGetBlueprintSlotInfoRsp", [
            { no: 1, name: "delete_slot_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "slot_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlueprintSlotInfo_1.HomeBlueprintSlotInfo },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { deleteSlotIdList: [], slotInfoList: [], retcode: 0 };
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
                case /* repeated uint32 delete_slot_id_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.deleteSlotIdList.push(reader.uint32());
                    else
                        message.deleteSlotIdList.push(reader.uint32());
                    break;
                case /* repeated HomeBlueprintSlotInfo slot_info_list */ 15:
                    message.slotInfoList.push(HomeBlueprintSlotInfo_1.HomeBlueprintSlotInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
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
        /* repeated uint32 delete_slot_id_list = 1; */
        if (message.deleteSlotIdList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.deleteSlotIdList.length; i++)
                writer.uint32(message.deleteSlotIdList[i]);
            writer.join();
        }
        /* repeated HomeBlueprintSlotInfo slot_info_list = 15; */
        for (let i = 0; i < message.slotInfoList.length; i++)
            HomeBlueprintSlotInfo_1.HomeBlueprintSlotInfo.internalBinaryWrite(message.slotInfoList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGetBlueprintSlotInfoRsp
 */
exports.HomeGetBlueprintSlotInfoRsp = new HomeGetBlueprintSlotInfoRsp$Type();
