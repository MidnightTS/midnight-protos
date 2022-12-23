"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampGetRecvItemListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WinterCampRecvItemData_1 = require("./WinterCampRecvItemData");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampGetRecvItemListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampGetRecvItemListRsp", [
            { no: 6, name: "recv_item_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WinterCampRecvItemData_1.WinterCampRecvItemData },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { recvItemDataList: [], retcode: 0 };
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
                case /* repeated WinterCampRecvItemData recv_item_data_list */ 6:
                    message.recvItemDataList.push(WinterCampRecvItemData_1.WinterCampRecvItemData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 5:
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
        /* repeated WinterCampRecvItemData recv_item_data_list = 6; */
        for (let i = 0; i < message.recvItemDataList.length; i++)
            WinterCampRecvItemData_1.WinterCampRecvItemData.internalBinaryWrite(message.recvItemDataList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampGetRecvItemListRsp
 */
exports.WinterCampGetRecvItemListRsp = new WinterCampGetRecvItemListRsp$Type();
