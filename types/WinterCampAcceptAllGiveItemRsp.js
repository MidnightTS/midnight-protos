"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinterCampAcceptAllGiveItemRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WinterCampAcceptItemResultInfo_1 = require("./WinterCampAcceptItemResultInfo");
// @generated message type with reflection information, may provide speed optimized methods
class WinterCampAcceptAllGiveItemRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WinterCampAcceptAllGiveItemRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "accept_item_result_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => WinterCampAcceptItemResultInfo_1.WinterCampAcceptItemResultInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, acceptItemResultInfo: [] };
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
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* repeated WinterCampAcceptItemResultInfo accept_item_result_info */ 1:
                    message.acceptItemResultInfo.push(WinterCampAcceptItemResultInfo_1.WinterCampAcceptItemResultInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated WinterCampAcceptItemResultInfo accept_item_result_info = 1; */
        for (let i = 0; i < message.acceptItemResultInfo.length; i++)
            WinterCampAcceptItemResultInfo_1.WinterCampAcceptItemResultInfo.internalBinaryWrite(message.acceptItemResultInfo[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WinterCampAcceptAllGiveItemRsp
 */
exports.WinterCampAcceptAllGiveItemRsp = new WinterCampAcceptAllGiveItemRsp$Type();
